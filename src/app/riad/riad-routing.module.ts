import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiadPage } from './riad.page';

const routes: Routes = [
  {
    path: '',
    component: RiadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiadPageRoutingModule {}
