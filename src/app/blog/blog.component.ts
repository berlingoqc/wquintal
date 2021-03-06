import { Component, OnInit } from '@angular/core';

import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    console.log(this.blogService.series);
  }

}
