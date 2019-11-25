import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieListItemComponent } from './serie-list-item.component';

describe('SerieListItemComponent', () => {
  let component: SerieListItemComponent;
  let fixture: ComponentFixture<SerieListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
