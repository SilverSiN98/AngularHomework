import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardCreateComponent } from './components/dashboard-create/dashboard-create.component';
import { DashboardEditComponent } from './components/dashboard-edit/dashboard-edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardResolveService } from './services/dashboard-resolve.service';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
      path: 'new',
      component: DashboardCreateComponent
    },
    {
      path: ':elem',
      component: DashboardEditComponent,
      resolve: { elem: DashboardResolveService }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }