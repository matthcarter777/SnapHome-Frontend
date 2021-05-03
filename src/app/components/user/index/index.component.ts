import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../../services/user.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class UserIndexComponent implements OnInit {
  users!: User[];

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.index().subscribe(users => {
      this.users = users
    })
  }

  navigateToNewUser(): void {
    this.router.navigate(['users/create'])
  }
}
