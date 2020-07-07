import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatLayoutComponent } from './flat-layout.component';

describe('FlatLayoutComponent', () => {
  let component: FlatLayoutComponent;
  let fixture: ComponentFixture<FlatLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
