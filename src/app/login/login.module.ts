import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from '../shared-ui/material/shared-material.module';
import {SharedUIModule} from '../shared-ui/ui/shared-ui.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,

    SharedMaterialModule,
    SharedUIModule,

    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
