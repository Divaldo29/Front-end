import {RouterModule, Routes} from "@angular/router";

import {NgModule} from "@angular/core";
import {ActividadesComponent} from "./actividades.component";
import {MainPageComponent} from "../../core/main-page/main-page.component";
import {MaterialesComponent} from "./materiales/materiales.component";
import {ProgramasComponent} from "./programas/programas.component";
import {TalleresComponent} from "./talleres/talleres.component";
import {CarreraComponent} from "./carrera/carrera.component";
import {FacultadComponent} from "./facultad/facultad.component";
import {PersonaComponent} from "./persona/persona.component";
import {TipoPersonaComponent} from "./tipo-persona/tipo-persona.component";
import {TipoMaterialesComponent} from "./tipo-materiales/tipo-materiales.component";
import {DashboardComponent} from "../dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent},
  {
  path: '',
  component: ActividadesComponent,
    children: [
      {
        path: 'materiales',
        component: MaterialesComponent,

      },
      {
        path: 'programas',
        component: ProgramasComponent,

      },
      {
        path: 'talleres',
        component: TalleresComponent,

      },
      {
        path: 'carrera',
        component: CarreraComponent
      },
      {
        path: 'facultades',
        component: FacultadComponent,
      },
      {
        path: 'personas',
        component: PersonaComponent,
      },
      {
        path: 'tipopersonas',
        component: TipoPersonaComponent
      },
      {
        path: 'materiales',
        component: MaterialesComponent,
      },
      {
        path: 'tipomateriales',
        component: TipoMaterialesComponent
      },
     ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ActividadesRoutingModule {

}
