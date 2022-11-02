import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridComponent } from './home/ag-grid/ag-grid.component';
import { HomeComponent } from './home/home.component';
import { NgrxTestComponent } from './home/ngrx-test/ngrx-test.component';
import { RouteComponentComponent } from './route-component/route-component.component';
import { HaveValidRouteGuard } from './routeGuard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'route/:id',
        component: RouteComponentComponent,
        canActivate: [HaveValidRouteGuard],
      },
      {
        path: 'ag-grid',
        component: AgGridComponent,
      },
      {
        path: 'ngrx',
        component: NgrxTestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
