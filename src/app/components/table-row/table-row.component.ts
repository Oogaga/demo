import {
  AfterContentInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {TableComponent} from "../table/table.component";

@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent implements OnInit, DoCheck, AfterContentInit {

  @Input() filterFlags = new Array(6).fill(true);
  @Input('index') index: any;
  @Input('data') data: any;
  topRadius = true;
  bottomRadius = true;

  constructor() {

  }

  ngOnInit() {
    this.topRadius = ((this.index === 0) || !(TableComponent.json[this.index - 1].data.flag && TableComponent.json[this.index].data.flag))
    this.bottomRadius = ((this.index === (TableComponent.json.length - 1)) || !(TableComponent.json[this.index + 1].data.flag && TableComponent.json[this.index].data.flag))
  }

  ngAfterContentInit() {


  }

  changeDetector(i: number) {


    TableComponent.json[this.index].data.flag = !TableComponent.json[this.index].data.flag;
    this.topRadius = TableComponent.topRadius[this.index]
    this.bottomRadius = TableComponent.bottomRadius[this.index]
    TableComponent.json[this.index] = this.data
  }


  ngDoCheck() {

  }

}
