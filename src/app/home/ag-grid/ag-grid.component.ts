import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, GridReadyEvent } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { debounceTime, Subject, take } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Car } from 'src/app/models/car.model';
import { saveFetchingData } from 'src/app/state/actions/ag-grid.actions';
import { carMock } from '../mocks/car-mock';
import { AgGridButtonCustomizeComponent } from '../ultilities/ag-grid-button-customize/ag-grid-button-customize.component';
import { GridSearchDataService } from './services/grid-search/grid-search-data.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AgGridComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    {
      field: 'make',
      editable: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      showDisabledCheckboxes: true,
    },
    { field: 'model' },
    { field: 'price', editable: true },
    {
      field: 'actions',
      cellRenderer: AgGridButtonCustomizeComponent,
      cellRendererParams: {
        clicked: (field: any) => {
          alert(`${field} was clicked`);
        },
      },
    },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<Car[]>;

  protected unsubscribe$ = new Subject<void>();

  mockCars = [] as Car[];
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  private searchKey: Subject<string> = new Subject();

  constructor(
    private gridSearchDataService: GridSearchDataService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.searchKey.pipe(debounceTime(500)).subscribe((searchKey) => {
      console.log(searchKey);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  // Example load data from sever
  async onGridReady(params: GridReadyEvent): Promise<void> {
    this.rowData$ = await this.gridSearchDataService.fetchData();

    this.rowData$.subscribe((data) => {
      this.store.dispatch(saveFetchingData({ fetchingData: data }));
    });

    // this.rowData$ = carMock;
    // console.log(this.rowData$);
    this.mockCars = carMock;
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
    this.store.pipe(take(1)).subscribe((data) => {
      console.log(data);
    });
  }

  onSearch(value: any): void {
    let searchValue = value.target.value;
    if (searchValue) {
      this.searchKey.next(value.target.value);
    }
  }
}
