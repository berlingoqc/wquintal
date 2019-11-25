import { Component, Input, OnInit } from '@angular/core';

import { BlogPost } from '../../model/blog_post';

@Component({
  selector: 'app-serie-list-item',
  templateUrl: './serie-list-item.component.html',
  styleUrls: ['./serie-list-item.component.scss']
})
export class SerieListItemComponent implements OnInit {

  @Input() id: string;
  @Input() posts: BlogPost[];

  constructor() { }

  ngOnInit() {
  }

}
