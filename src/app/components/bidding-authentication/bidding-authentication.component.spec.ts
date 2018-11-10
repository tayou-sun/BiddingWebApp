import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BildingAuthenticationComponent } from './bidding-authentication.component';

describe('BildingAuthenticationComponent', () => {
  let component: BildingAuthenticationComponent;
  let fixture: ComponentFixture<BildingAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BildingAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BildingAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
