import * as jsonData from 'src/assets/link-accounts.json';

import { Component, OnInit } from '@angular/core';

import { LinkAccountSite } from '../link-account-site/link-account-site.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  accounts: LinkAccountSite[];
  data: any;

  constructor() {
    this.accounts = (jsonData as any).default as LinkAccountSite[];
    console.log(this.accounts);
  }

  ngOnInit() {
  }

}
