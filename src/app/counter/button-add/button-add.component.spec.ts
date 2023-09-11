import { ButtonAddComponent } from './button-add.component';

describe('ButtonAddComponent', () => {
  let component: ButtonAddComponent;
  /* let fixture: ComponentFixture<ButtonAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAddComponent]
    });
    fixture = TestBed.createComponent(ButtonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  it('counter should be 0', () => {
    expect(component.counter).toBe(0);
  });

  it('should emit 1', () => {
    let newValue = 0;

    component.onAdd.subscribe((counter) => {
      newValue = counter;
    });

    component.add();

    expect(newValue).toBe(1);
  });
});
