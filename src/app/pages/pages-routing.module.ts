import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';

export const PagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'crud',
        component: CrudComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(PagesRoutes)],
    exports: [RouterModule],
  })
export class PagesRoutingModule {
}