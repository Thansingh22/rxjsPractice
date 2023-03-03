import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './observables/filter/filter.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { ListComponent } from './observables/list/list.component';
import { MapComponent } from './observables/map/map.component';
import { ObservablesComponent } from './observables/observables.component';
import { ToArrayComponent } from './observables/to-array/to-array.component';

const routes: Routes = [
  { path: 'observable', component:  ObservablesComponent,children:[
    {path: '', component:  ListComponent},
    {path: 'formevent', component:  FromEventComponent},
    {path: 'interval', component:  IntervalComponent},
    {path: 'toarray', component:  ToArrayComponent},
    {path: 'toarray', component:  ToArrayComponent},
    {path: 'map', component:  MapComponent},
    {path: 'filter', component:  FilterComponent},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
