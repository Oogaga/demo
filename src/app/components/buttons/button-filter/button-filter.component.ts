import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button-filter',
  templateUrl: './button-filter.component.html',
  styleUrls: ['./button-filter.component.css']
})
export class ButtonFilterComponent implements OnInit {

  filterFlags: boolean[] = [];
  nameOfColumns: string[] = ['Name', 'Position', 'Department', 'Seniority Level', 'Location', 'Company Work Experience']
  @Output()
  out = new EventEmitter<boolean[]>();

  constructor() {
    this.filterFlags = new Array(this.nameOfColumns.length).fill(true);
  }

  ngOnInit(): void {
  }

  changeColumns(index: number) {
    this.filterFlags[index] = !this.filterFlags[index]
    this.out.emit(this.filterFlags);
    // TODO emit event
  }

}
