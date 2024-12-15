import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopRoutingModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule {}