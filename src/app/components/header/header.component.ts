import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() handleSearchValueChange = new EventEmitter();

  searchInput: String = '';
  handleSubmit(e: any) {
    e.preventDefault();

    this.handleSearchValueChange.emit(this.searchInput);
  }

  handleChange(val: any) {
    this.searchInput = val.trim();
  }

  constructor() {}

  ngOnInit(): void {}
}
