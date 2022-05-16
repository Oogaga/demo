import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getData() {
    return this.http.get<User[]>('http://localhost:4200/assets/data.json');
  }

}
