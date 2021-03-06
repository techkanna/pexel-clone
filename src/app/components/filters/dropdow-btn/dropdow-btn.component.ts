import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdow-btn',
  templateUrl: './dropdow-btn.component.html',
  styleUrls: ['./dropdow-btn.component.scss'],
})
export class DropdowBtnComponent implements OnInit {
  @Input() type: any;
  @Output() getType: any = new EventEmitter();

  handleClick(e: any) {
    this.getType.emit(e);
  }
  constructor() {}

  ngOnInit(): void {}
}
