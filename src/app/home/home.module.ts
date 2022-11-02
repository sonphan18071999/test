import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgrxTestModule } from './ngrx-test/ngrx-test.module';
import { AgGridDemoModule } from './ag-grid/ag-grid-demo.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    NgrxTestModule,
    AgGridDemoModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent, MatCardModule, MatButtonModule],
})
export class HomeModule {}
