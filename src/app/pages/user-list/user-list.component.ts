import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.model';
import { userdata } from 'src/app/mock-data/user-data';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[] = userdata;

  constructor() { }

  ngOnInit(): void {
    // this.userList
  }

  deleteUser(id: any) {
    this.userList.filter((item) => {
      // item.id !== id;
      // console.log(id)
    })
    this.userList.splice(id, 1);
  }

}
