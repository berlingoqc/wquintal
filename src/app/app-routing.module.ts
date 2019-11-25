import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home/home.component';
import { MarkdownPageComponent } from './component/markdown-page/markdown-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: MarkdownPageComponent,
    data: {
      file: 'assets/page/about'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
