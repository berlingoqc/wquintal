import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog.routing';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatModule } from './../mat.module';
import { NgModule } from '@angular/core';
import { SeriesListComponent } from './component/series-list/series-list.component';
import { SeriesPostComponent } from './component/series-post/series-post.component';
import { TranslateModule } from '@ngx-translate/core';
import { SerieListItemComponent } from './component/serie-list-item/serie-list-item.component';

@NgModule({
  declarations: [BlogComponent, SeriesListComponent, SeriesPostComponent, DashboardComponent, SerieListItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatModule,
    BlogRoutingModule,
    MarkdownModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
