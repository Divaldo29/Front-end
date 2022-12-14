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
import { CarreraComponent } from './carrera/carrera.component';
import { FormModalCarreraComponent } from './carrera/form-modal-carrera/form-modal-carrera.component';
import {CarreraService} from "../../providers/services/carrera.service";
import { FacultadComponent } from './facultad/facultad.component';
import { FormModalFacultadComponent } from './facultad/form-modal-facultad/form-modal-facultad.component';
import {FacultadService} from "../../providers/services/facultad.service";
import {PersonaService} from "../../providers/services/persona.service";
import {PersonaComponent} from "./persona/persona.component";
import {FormModalPersonaComponent} from "./persona/form-modal-persona/form-modal-persona.component";
import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';
import { FormModalTipoPersonaComponent } from './tipo-persona/form-modal-tipo-persona/form-modal-tipo-persona.component';
import {TipoPersonaService} from "../../providers/services/tipo-persona.service";
import {MaterialService} from "../../providers/services/material.service";
import { FormModalMaterialesComponent } from './materiales/form-modal-materiales/form-modal-materiales.component';
import {TipoMaterialService} from "../../providers/services/tipo-material.service";
import { TipoMaterialesComponent } from './tipo-materiales/tipo-materiales.component';
import {
  FormModalTipoMaterialesComponent
} from "./tipo-materiales/form-modal-tipo-materiales/form-modal-tipo-materiales.component";
import { PersonaTallerComponent } from './persona-taller/persona-taller.component';
import { FormModalPersonaTallerComponent } from './persona-taller/form-modal-persona-taller/form-modal-persona-taller.component';
import {PersonaTallerService} from "../../providers/services/persona-taller.service";



@NgModule({
  declarations: [
    TalleresComponent,
    ProgramasComponent,
    MaterialesComponent,
    ActividadesComponent,
    FormModalComponent,
    FormModalTallerComponent,
    CarreraComponent,
    FormModalCarreraComponent,
    FacultadComponent,
    FormModalFacultadComponent,
    PersonaComponent,
    FormModalPersonaComponent,
    TipoPersonaComponent,
    FormModalTipoPersonaComponent,
    FormModalMaterialesComponent,
    FormModalTipoMaterialesComponent,
    TipoMaterialesComponent,
    PersonaTallerComponent,
    FormModalPersonaTallerComponent,
  ],
    imports: [
        CommonModule,
        ActividadesRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
    ProgramaService,
    TallerService,
    CarreraService,
    FacultadService,
    PersonaService,
    TipoPersonaService,
    MaterialService,
    TipoMaterialService,
    PersonaTallerService,

  ]
})
export class ActividadesModule { }
