import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';

import { LoginComponent } from './pages/login/login.component'
;
import { ContentComponent } from './components/shared/layout/content/content.component';

import { UserDeleteComponent } from './components/user/delete/delete.component';
import { UserCreateComponent } from './components/user/create/create.component';
import { UserIndexComponent } from './components/user/index/index.component';
import { UserUpdateComponent } from './components/user/update/update.component';

import { PropertyIndexComponent } from './components/property/index/index.component';
import { PropertyCreateComponent } from './components/property/create/create.component';
import { PropertyDeleteComponent } from './components/property/delete/delete.component';
import { PropertyUpdateComponent } from './components/property/update/update.component';

const routes: Routes = [
  { path: '',  
    component: ContentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "users", component: UserIndexComponent },
      { path: "users/create", component: UserCreateComponent },
      { path: "users/update/:id", component: UserUpdateComponent },
      { path: "users/delete/:id", component: UserDeleteComponent },
      { path: "propertys", component: PropertyIndexComponent },
      { path: "propertys/create", component: PropertyCreateComponent },
      { path: "propertys/update/:id", component: PropertyUpdateComponent },
      { path: "propertys/delete/:id", component: PropertyDeleteComponent },
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
