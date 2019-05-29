import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DirectionGeoPage } from './direction-geo.page';
import {Geolocation} from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: DirectionGeoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
      ReactiveFormsModule
  ],
  declarations: [DirectionGeoPage],
  providers: [ Geolocation ]
})
export class DirectionGeoPageModule {}
