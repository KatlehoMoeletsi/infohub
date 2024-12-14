import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about.component';

import { AboutRoutingModule } from './about-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule {}