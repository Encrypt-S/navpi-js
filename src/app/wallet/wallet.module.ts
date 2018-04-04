import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './wallet.component';
import {WalletRoutingModule} from './wallet-routing.module';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';
import {SharedUIModule} from '../shared-ui/ui/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,

    SharedMaterialModule,
    SharedUIModule,

    WalletRoutingModule
  ],

  declarations: [WalletComponent],
  exports: [WalletComponent]
})
export class WalletModule { }
