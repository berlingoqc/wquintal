import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPostComponent } from './series-post.component';

describe('SeriesPostComponent', () => {
  let component: SeriesPostComponent;
  let fixture: ComponentFixture<SeriesPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
