import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').
      then(m => m.HomePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'track',
    loadChildren: () => import('./track/track.module').then(m => m.TrackPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then(m => m.FirstPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./second/second.module').then(m => m.SecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./third/third.module').then(m => m.ThirdPageModule)
  },
  {
    path: 'fourth',
    loadChildren: () => import('./fourth/fourth.module').then(m => m.FourthPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
