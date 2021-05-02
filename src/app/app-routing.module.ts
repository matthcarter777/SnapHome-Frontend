import { UserCreateComponent } from './components/user/create/create.component';
import { UserIndexComponent } from './components/user/index/index.component';
import { ContentComponent } from './components/shared/layout/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '',  
    component: ContentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "users", component: UserIndexComponent },
      { path: "users/create", component: UserCreateComponent },
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
