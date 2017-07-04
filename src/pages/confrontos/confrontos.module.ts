import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfrontosPage } from './confrontos';

@NgModule({
  declarations: [
    ConfrontosPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfrontosPage),
  ],
  exports: [
    ConfrontosPage
  ]
})
export class ConfrontosPageModule {}
