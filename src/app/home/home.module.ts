import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgrxTestModule } from './ngrx-test/ngrx-test.module';
import { AgGridDemoModule } from './ag-grid/ag-grid-demo.module';
import { AgGridButtonCustomizeComponent } from './ultilities/ag-grid-button-customize/ag-grid-button-customize.component';
import { SSOModule } from './sso/sso.module';
import { LoginPageModule } from '../login-page/login-page.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    NgrxTestModule,
    AgGridDemoModule,
    SSOModule,
    LoginPageModule,
  ],
  declarations: [HomeComponent, AgGridButtonCustomizeComponent],
  exports: [HomeComponent, MatCardModule, MatButtonModule],
})
export class HomeModule {}
