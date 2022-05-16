import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../interfaces/user/user";
import {TableComponent} from "../table/table.component";

@Component({
  selector: 'app-s-input',
  templateUrl: './s-input.component.html',
  styleUrls: ['./s-input.component.css']
})
export class SInputComponent implements OnInit {

  searchInput: string = ''
  @Input()
  displayingData: User[] = [];
  @Output()
  out = new EventEmitter<boolean[]>();
  @Output()
  searchEmitter = new EventEmitter<User[]>()
  filterFlags: boolean[] = new Array(6).fill(true);
  constructor() { }

  ngOnInit(): void {
  }

  changeColumns(flags: boolean[]) {
    this.filterFlags = flags;
    this.out.emit(this.filterFlags);
    // TODO emit event
  }

  search(str: string) {
    this.displayingData = TableComponent.json;
    this.displayingData = this.displayingData.filter(value => {
      let data: any = value.data
      for (const element in data) {
        if ((element !== 'img') && (typeof data[element] === "string") && data[element]
          .toLowerCase()
          .includes(str.toLowerCase())) {
          return data[element]
            .toLowerCase()
            .includes(str.toLowerCase())
        }
      }
    })
    this.searchEmitter.emit(this.displayingData);
    // TODO emit event
  }
  // `\.*${str}\.*`
  // `[a-zA-Z\d\t ]*${str}[a-zA-Z\d\t]*`
}
