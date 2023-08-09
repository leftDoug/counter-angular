import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from "./counter.component"

describe('CounterComponent', () => {
  /*let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/
  
  it('should create', () => {
    // expect(component).toBeTruthy();
    const fixture = TestBed.createComponent(CounterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('initial value of counter is 0', () => {
    const counter = new CounterComponent();
    expect(counter.counter).toBe(0);
  });
});
