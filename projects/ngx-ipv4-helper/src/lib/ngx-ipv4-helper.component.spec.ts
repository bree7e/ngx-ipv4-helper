import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIpv4HelperComponent } from './ngx-ipv4-helper.component';

describe('NgxIpv4HelperComponent', () => {
  let component: NgxIpv4HelperComponent;
  let fixture: ComponentFixture<NgxIpv4HelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIpv4HelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIpv4HelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
