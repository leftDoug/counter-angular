import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CounterComponent } from "./counter.component"
import { ButtonAddComponent } from './button-add/button-add.component';

describe('CounterComponent Unit', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    // expect(component).toBeTruthy();
    fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('should create the text Counter: 0', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    // const app = fixture.componentInstance;
    expect(compiled.querySelector("h1")?.textContent).toEqual("Counter: 0");
  });

  it('initial value of counter is 0', () => {
    const counter = new CounterComponent();
    expect(counter.counter).toBe(0);
  });
});

describe('CounterComponent Integration', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
})
