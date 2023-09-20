import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRxJsComponent } from './example-rx-js.component';

describe('ExampleRxJsComponent', () => {
  let component: ExampleRxJsComponent;
  let fixture: ComponentFixture<ExampleRxJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleRxJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
