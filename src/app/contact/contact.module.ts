import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule {}