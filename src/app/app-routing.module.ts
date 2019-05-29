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
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'simple', loadChildren: './simple/simple.module#SimplePageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' },
  { path: 'marker', loadChildren: './marker/marker.module#MarkerPageModule' },
  { path: 'direction', loadChildren: './direction/direction.module#DirectionPageModule' },
  { path: 'direction-geo', loadChildren: './direction-geo/direction-geo.module#DirectionGeoPageModule' },
  { path: 'autocomplete', loadChildren: './autocomplete/autocomplete.module#AutocompletePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
