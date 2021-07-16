import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
     {
        path: 'store',
        loadChildren: () => import('../store/store.module').then( m => m.StorePageModule)
      },
      {
        path: 'music',
        loadChildren: () => import('../music/music.module').then( m => m.MusicPageModule)
      },
      {
        path: 'culture',
        loadChildren: () => import('../culture/culture.module').then( m => m.CulturePageModule)
      },
      {
        path: 'food',
        loadChildren: () => import('../food/food.module').then( m => m.FoodPageModule)
      },
      {
        path: 'riad',
        loadChildren: () => import('../riad/riad.module').then( m => m.RiadPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
