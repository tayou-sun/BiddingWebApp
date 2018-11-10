import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingGridComponent } from './bidding-grid.component';

describe('BiddingGridComponent', () => {
  let component: BiddingGridComponent;
  let fixture: ComponentFixture<BiddingGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddingGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
