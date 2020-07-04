import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartsComponent } from './piecharts.component';

describe('PiechartsComponent', () => {
  let component: PiechartsComponent;
  let fixture: ComponentFixture<PiechartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
