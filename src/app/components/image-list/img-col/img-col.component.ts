import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-col',
  templateUrl: './img-col.component.html',
  styleUrls: ['./img-col.component.scss'],
})
export class ImgColComponent implements OnInit {
  @Input() col: any;

  constructor() {}

  ngOnInit(): void {}
}
