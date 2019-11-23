import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="main-container">
      <mat-toolbar class="header-container">
        <span>wquintal.ca -</span>
        <span style="font-style: italic;">&nbsp;{{'taskbar.title'|translate}}</span>

        <span style="flex: 1 1 auto;"></span>
        <div style="display: flex;">
          <mat-chip-list>
            <mat-chip (click)="router.navigate([''])">{{'taskbar.home' | translate }}</mat-chip>
            <!--<mat-chip>Projects</mat-chip>-->
            <mat-chip (click)="router.navigate(['blog'])">{{'taskbar.blog'| translate}}</mat-chip>
            <mat-chip (click)="router.navigate(['about'])">{{'taskbar.about'| translate}}</mat-chip>
          </mat-chip-list>
          <span class="lang-section">
            <span *ngFor="let l of lang; index as i">
              <a [ngStyle]="getLangStyle(l)" (click)="translateService.use(l)">{{l}}</a>
              <span *ngIf="i < lang.length - 1">&nbsp;&brvbar;&nbsp;</span>
            </span>
          </span>
        </div>
      </mat-toolbar>
      <div class="outlet-container">
        <router-outlet></router-outlet>
      </div>
      <div class="footer-container">
        <mat-toolbar class="center-container">
          <span>You do you</span>
        </mat-toolbar>
      </div>
    </div>
  `
})
export class AppComponent {

  lang = ['fr', 'en'];

  constructor(public router: Router, public translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  getLangStyle(lang: string) {
    if (this.translateService.currentLang === lang) {
      return {
        'text-decoration': 'underline'
      };
    }
    return '';

  }
}
