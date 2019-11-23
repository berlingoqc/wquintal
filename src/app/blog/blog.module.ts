import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog.routing';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatModule } from './../mat.module';
import { NgModule } from '@angular/core';
import { SeriesListComponent } from './component/series-list/series-list.component';
import { SeriesPostComponent } from './component/series-post/series-post.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BlogComponent, SeriesListComponent, SeriesPostComponent, DashboardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatModule,
    BlogRoutingModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
