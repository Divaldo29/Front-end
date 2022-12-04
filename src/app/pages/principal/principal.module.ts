import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//proveedores ##p
import { DashboardComponent } from '..//dashboard/dashboard.component';
import {PrincipalRoutingModule} from "./principal-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [

  ],
  imports: [
    PrincipalRoutingModule,
    ReactiveFormsModule,


  ],
  providers: [],
})
export class PrincipalModule { }
