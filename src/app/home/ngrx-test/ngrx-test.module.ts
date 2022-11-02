import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxTestComponent } from './ngrx-test.component';

@NgModule({
  declarations: [NgrxTestComponent],
  imports: [CommonModule],
  exports: [NgrxTestComponent],
})
export class NgrxTestModule {}
