import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-btn',
  templateUrl: './color-btn.component.html',
  styleUrls: ['./color-btn.component.scss'],
})
export class ColorBtnComponent implements OnInit {
  @Input() color: any;
  @Output() getColor: any = new EventEmitter();

  handleClick(col: any) {
    this.getColor.emit(col);
  }

  constructor() {}

  ngOnInit(): void {}
}
