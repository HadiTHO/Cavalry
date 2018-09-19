import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkermapPage } from './markermap';

@NgModule({
  declarations: [
    MarkermapPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkermapPage),
  ],
})
export class MarkermapPageModule {}
