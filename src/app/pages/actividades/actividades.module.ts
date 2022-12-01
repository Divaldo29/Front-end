import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalleresComponent } from './talleres/talleres.component';
import { ProgramasComponent } from './programas/programas.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { ActividadesComponent } from './actividades.component';
import {RouterOutlet} from "@angular/router";
import {ActividadesRoutingModule} from "./actividades-routing.module";
import {ProgramaService} from "../../providers/services/programa.service";
import { FormModalComponent } from './programas/form-modal/form-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormModalTallerComponent } from './talleres/form-modal-taller/form-modal-taller.component';
import {TallerService} from "../../providers/services/taller.service";



@NgModule({
  declarations: [
    TalleresComponent,
    ProgramasComponent,
    MaterialesComponent,
    ActividadesComponent,
    FormModalComponent,
    FormModalTallerComponent,
  ],
    imports: [
        CommonModule,
        ActividadesRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
    ProgramaService,
    TallerService,
  ]
})
export class ActividadesModule { }
