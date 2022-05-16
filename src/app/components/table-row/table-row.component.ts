
import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {User} from "../../interfaces/user/user";
import {TableComponent} from "../table/table.component";

@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent implements OnInit, DoCheck {

  @Input() filterFlags = new Array(6).fill(true);
  @Input('index') index: any;
  @Input() displayingData: User[] = [];
  @Output() returnData = new EventEmitter<User[]>();
  topRadius = true;
  bottomRadius = true;

  constructor() {

  }

  ngOnInit() {

  }

  changeDetector(i: number) {
    TableComponent.json[this.index].data.flag = !TableComponent.json[this.index].data.flag;
    this.topRadius = ((this.index>0)&&!TableComponent.json[this.index-1].data.flag&&((this.index>0)&&TableComponent.json[this.index].data.flag));
    this.bottomRadius = ((this.index<TableComponent.json.length)&&TableComponent.json[this.index+1].data.flag&&TableComponent.json[this.index].data.flag);
    this.returnData.emit(this.displayingData)
    // TODO emit event
  }



  ngDoCheck() {

  }


}
