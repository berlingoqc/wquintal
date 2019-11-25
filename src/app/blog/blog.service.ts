import * as jsonData from 'src/assets/series/series.json';

import { Injectable, OnInit } from '@angular/core';

import { BlogSerie } from './model/blog_series';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  series: BlogSerie[];

  constructor(private translate: TranslateService) {
    this.series = Object.entries((jsonData as any).default).map(([id, x]) => {
      const b = x as BlogSerie;
      b.ID = id;
      return b;
    });
  }

  getSeriePostContentPath(serie: BlogSerie, postIndex: number) {
    if (postIndex >= serie.Posts.length) {
      return '';
    }
    return `assets/series/${serie.ID}/${serie.Posts[postIndex].ID}_${this.translate.currentLang}.md`;
  }

}
