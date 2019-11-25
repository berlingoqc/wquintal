import { OnInit } from '@angular/core';

export class BlogPost {
  ID: string;

  Thumbnail: string;

  PublishedOn: number;
  ModifiedOn: number;

  get isRelease() {
    return Date.now() >= this.PublishedOn;
  }
}
