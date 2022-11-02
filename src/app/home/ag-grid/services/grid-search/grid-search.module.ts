import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridSearchService } from './grid-search.service';
import { GridSearchDataService } from './grid-search-data.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, GridSearchService, GridSearchDataService],
})
export class GridSearchModule {}
