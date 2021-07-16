import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu/home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
 
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'place/:id',
    loadChildren: () => import('./place/place.module').then( m => m.PlacePageModule)
  },
  {
    path: 'detail-riad/:id',
    loadChildren: () => import('./detail-riad/detail-riad.module').then( m => m.DetailRiadPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'user-creation',
    loadChildren: () => import('./user-creation/user-creation.module').then( m => m.UserCreationPageModule)
  },
];

@NgModule({
  imports: [HttpClientModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),  Ng2SearchPipeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
