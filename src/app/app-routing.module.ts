import { ContentComponent } from './components/shared/layout/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '',  
    component: ContentComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
