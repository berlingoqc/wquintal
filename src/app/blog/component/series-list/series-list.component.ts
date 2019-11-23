import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  constructor(public blogService: BlogService) { }

  ngOnInit() {
  }

}
