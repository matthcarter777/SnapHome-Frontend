import { TokenInterceptor } from './interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LoginComponent } from './pages/login/login.component';
import { ContentComponent } from './components/shared/layout/content/content.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule  } from 'ng-zorro-antd/input';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import { UserIndexComponent } from './components/user/index/index.component';
import { UserCreateComponent } from './components/user/create/create.component';
import { UserDeleteComponent } from './components/user/delete/delete.component';
import { UserUpdateComponent } from './components/user/update/update.component';

import { PropertyIndexComponent } from './components/property/index/index.component';
import { PropertyCreateComponent } from './components/property/create/create.component';
import { PropertyDeleteComponent } from './components/property/delete/delete.component';
import { PropertyUpdateComponent } from './components/property/update/update.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    UserIndexComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    PropertyIndexComponent,
    PropertyCreateComponent,
    PropertyDeleteComponent,
    PropertyUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    DemoNgZorroAntdModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
