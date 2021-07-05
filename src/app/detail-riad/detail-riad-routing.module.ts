import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRiadPage } from './detail-riad.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRiadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRiadPageRoutingModule {}
