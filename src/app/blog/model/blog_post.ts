

export class BlogPost {
  ID: string;

  Thumbnail: string;

  PublishedOn: number;
  ModifiedOn: number;

  File: string;

  get isRelease() {
    return Date.now() >= this.PublishedOn;
  }

}
