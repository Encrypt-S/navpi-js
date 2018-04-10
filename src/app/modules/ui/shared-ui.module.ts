import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {SharedMaterialModule} from '../../shared/components/material/shared-material.module';
import {ScorecardComponent} from './components/scorecard/scorecard.component';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';


@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SweetAlert2Module
  ],
  declarations: [
    HeaderComponent,
    ScorecardComponent,

  ],
  providers: [
  ],

  exports: [
    HeaderComponent,
    ScorecardComponent,

  ]
})
export class SharedUIModule { }
