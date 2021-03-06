import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vid-col',
  templateUrl: './vid-col.component.html',
  styleUrls: ['./vid-col.component.scss'],
})
export class VidColComponent implements OnInit {
  @Input() col: any;

  constructor() {}

  ngOnInit(): void {}
}
