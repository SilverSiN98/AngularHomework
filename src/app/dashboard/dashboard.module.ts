import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardCreateComponent } from './components/dashboard-create/dashboard-create.component';
import { DashboardFormComponent } from './components/dashboard-form/dashboard-form.component';
import { DashboardEditComponent } from './components/dashboard-edit/dashboard-edit.component';
import { DashboardService } from './services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardResolveService } from './services/dashboard-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardCreateComponent,
    DashboardFormComponent,
    DashboardEditComponent
  ],
  providers: [
    DashboardService,
    DashboardResolveService
  ]
})
export class DashboardModule { }