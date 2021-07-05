import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiadPageRoutingModule } from './riad-routing.module';

import { RiadPage } from './riad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiadPageRoutingModule
  ],
  declarations: [RiadPage]
})
export class RiadPageModule {}
