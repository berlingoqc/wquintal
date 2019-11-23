import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogModule } from './blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';
import { MarkdownPageComponent } from './component/markdown-page/markdown-page.component';
import { MatModule } from './mat.module';
import { NgModule } from '@angular/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    MarkdownPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    HomeModule,
    BlogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
