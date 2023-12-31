import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-dis',
  templateUrl: './button-dis.component.html',
  styleUrls: ['./button-dis.component.css']
})
export class ButtonDisComponent {
  @Input()
  counter: number = 0;
  
  @Output()
  onDis: EventEmitter<number> = new EventEmitter();
  
  dis() {
    this.counter--;
    this.onDis.emit(this.counter);
}
}
