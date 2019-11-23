import * as jsonData from 'src/assets/series/series.json';

import { Injectable, OnInit } from '@angular/core';

import { BlogSerie } from './model/blog_series';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  series: BlogSerie[];

  constructor() {
    this.series = Object.entries((jsonData as any).default).map(([id, x]) => {
      const b = x as BlogSerie;
      b.ID = id;
      return b;
    });
  }


}
