import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSOComponent } from './sso.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [SSOComponent, MatCardModule, MatButtonModule],
  declarations: [SSOComponent],
})
export class SSOModule {}
