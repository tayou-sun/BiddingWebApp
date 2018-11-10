import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqLibraryComponent } from './jq-library.component';

describe('JqLibraryComponent', () => {
  let component: JqLibraryComponent;
  let fixture: ComponentFixture<JqLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
