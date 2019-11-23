import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-markdown-page',
  templateUrl: './markdown-page.component.html',
  styleUrls: ['./markdown-page.component.scss']
})
export class MarkdownPageComponent implements OnInit {


  file = '';

  constructor(private route: ActivatedRoute, private translateService: TranslateService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.file = data.file;
    });
  }

  getFileName() {
    return this.file +  '_' + this.translateService.currentLang + '.md';
  }

}
