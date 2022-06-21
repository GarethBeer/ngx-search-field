import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSearchFieldComponent } from './ngx-search-field.component';

describe('NgxSearchFieldComponent', () => {
  let component: NgxSearchFieldComponent;
  let fixture: ComponentFixture<NgxSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSearchFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
