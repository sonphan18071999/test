import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-button-customize',
  templateUrl: './ag-grid-button-customize.component.html',
  styleUrls: ['./ag-grid-button-customize.component.scss'],
})
export class AgGridButtonCustomizeComponent
  implements ICellRendererAngularComp
{
  private params: any;

  constructor() {}

  refresh(params: ICellRendererParams<any, any>): boolean {
    throw new Error('Method not implemented.');
  }

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler() {
    this.params.clicked(this.params.value);
  }
}
