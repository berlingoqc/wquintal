import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { BlogSerie } from '../../model/blog_series';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-series-post',
  templateUrl: './series-post.component.html',
  styleUrls: ['./series-post.component.scss']
})
export class SeriesPostComponent implements OnInit {
  serie: BlogSerie;
  index: number;

  constructor(public blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(x => {
       this.serie = this.blogService.series.find(y => y.ID === x.get('id'));
       this.index = +x.get('index');
    });
  }

}
