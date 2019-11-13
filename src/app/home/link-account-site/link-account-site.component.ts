import { Component, Input, OnInit } from '@angular/core';

export interface LinkAccountSite {
  url: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-link-account-site',
  templateUrl: './link-account-site.component.html',
  styleUrls: ['./link-account-site.component.scss']
})
export class LinkAccountSiteComponent implements OnInit {

  @Input() account: LinkAccountSite;

  constructor() { }

  ngOnInit() {
  }

}
