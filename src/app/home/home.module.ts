import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LinkAccountSiteComponent } from './link-account-site/link-account-site.component';
import { MatModule } from '../mat.module';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, LinkAccountSiteComponent],
  imports: [
    MatModule,
    CommonModule,
    TranslateModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
