import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeRoutingModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule {}