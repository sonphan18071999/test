import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridComponent } from './ag-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AgGridModule } from 'ag-grid-angular';
import { MatCardModule } from '@angular/material/card';
import { ConfigureButtonPipe } from './pipes/configure-button.pipe';

@NgModule({
  declarations: [AgGridComponent, ConfigureButtonPipe],
  imports: [CommonModule, AgGridModule, MatCardModule],
  exports: [AgGridComponent, MatGridListModule, AgGridModule, MatCardModule],
})
export class AgGridDemoModule {}
