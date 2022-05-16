import {
  AfterContentInit,
  Component,
  DoCheck,
  OnInit, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {User} from "../../interfaces/user/user";
import {UsersService} from "../../service/users.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit, DoCheck {


  mainFlag: boolean = false;
  filterFlags: boolean[] = new Array(6).fill(true);
  public static topRadius: boolean[] = [];
  public static bottomRadius: boolean[] = [];
  displayingData: User[] = [];
  public static json: User[] = [];
  field: string = '';
  isDirty = false;
  top: boolean = true;
  bottom: boolean = true;
  headersName = ['Name', 'Position', 'Department', 'Seniority Level', 'Location', 'Company Work Experience', 'Position Match'];
  headersId = ['name', 'position', 'department', 'seniorityLevel', 'location', 'companyWorkExperience', 'positionMatch'];

  constructor(private service: UsersService
  ) {
  }


  ngOnInit() {
    this.getUsers();
    TableComponent.topRadius =  new Array(TableComponent.json.length).fill(true)
    TableComponent.bottomRadius =  new Array(TableComponent.json.length).fill(true)
  }

  getUsers() {
    this.service.getData().subscribe(data => {
      this.displayingData = data;
      TableComponent.json = data;
    });
  }

  dirty() {
    this.isDirty = true;
  }

  changeColumns(flags: boolean[]) {
    this.filterFlags = flags;
  }


  sort(field: string) {
    if (this.field === field) {
      this.displayingData.sort((a: any, b: any) => a.data[field] < b.data[field] ? 1 : -1);
      this.field = ''
    } else {
      this.displayingData.sort((a: any, b: any) => a.data[field] > b.data[field] ? 1 : -1);
      this.field = field
    }
  }

  search(data: User[]) {
    this.displayingData = data;
  }


  takeAll(bool: boolean) {
    for (let data of this.displayingData) {
      data.data.flag = !this.mainFlag;
    }
  }


  ngDoCheck() {
    if (this.isDirty) {
      this.isDirty = false;
      setTimeout(()=>{this.displayingData=[]})
      setTimeout(()=>{this.displayingData=TableComponent.json})
      console.log('isDirty')
    }

  }

}
