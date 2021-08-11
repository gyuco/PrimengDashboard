import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedPrimeNgModule } from '../shared-prime-ng.module';
import { CrudComponent } from './crud/crud.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SharedPrimeNgModule
  ]
})
export class PagesModule { }
