import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {SharedMaterialModule} from '../material/shared-material.module';
import { ScorecardComponent } from './components/scorecard/scorecard.component';



@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,

  ],
  declarations: [
    HeaderComponent,
    ScorecardComponent,

  ],
  providers: [
  ],

  exports: [
    HeaderComponent,
    ScorecardComponent
  ]
})
export class SharedUIModule { }
