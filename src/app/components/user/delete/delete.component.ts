import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.userService.show(id as string).subscribe(user => {
      this.user = user;
    });
  }

  create() {
    this.userService.delete(this.user.id as string).subscribe(() =>{
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users']);
  };
}
