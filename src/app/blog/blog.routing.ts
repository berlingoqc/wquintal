import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { SeriesPostComponent } from './component/series-post/series-post.component';

const route: Routes = [
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }, {
        path: 'series/post/:id/:index',
        component: SeriesPostComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
