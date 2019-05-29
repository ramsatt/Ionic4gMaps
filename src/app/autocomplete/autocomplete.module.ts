import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AutocompletePage } from './autocomplete.page';

const routes: Routes = [
  {
    path: '',
    component: AutocompletePage
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
  declarations: [AutocompletePage]
})
export class AutocompletePageModule {}
