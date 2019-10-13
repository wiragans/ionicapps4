import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahkomentarPage } from './tambahkomentar.page';

const routes: Routes = [
  {
    path: '',
    component: TambahkomentarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahkomentarPage]
})
export class TambahkomentarPageModule {}
