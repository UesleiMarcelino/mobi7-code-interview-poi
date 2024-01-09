import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public emmitSearched: any = new EventEmitter();

  applyFilter(value: any) {
    this.emmitSearched.emit(value);
  }

}
