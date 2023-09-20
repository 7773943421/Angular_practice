import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyComp1Component } from './key-comp1.component';

describe('KeyComp1Component', () => {
  let component: KeyComp1Component;
  let fixture: ComponentFixture<KeyComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
