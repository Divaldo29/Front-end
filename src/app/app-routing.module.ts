import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./core/main-page/main-page.component";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {PaginaPrincipalComponent} from "./core/pagina-principal/pagina-principal.component";
import {PrincipalComponent} from "./pages/principal/principal.component";
//rutas de navegacion//
const routes: Routes = [

  {
    path: '', component: MainPageComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: "full"
      },
      {
        path: 'actividades',
        loadChildren: () => import('./pages/actividades/actividades.module')
          .then(m => m.ActividadesModule)

      }]
  },
  {
    path: '',
    component: PaginaPrincipalComponent,
    children: [
      {
        path: '',
        component: PrincipalComponent,
        pathMatch: "full"
      },
      {
        path: 'principal',
        loadChildren: () => import('./pages/principal/principal.module')
          .then(m => m.PrincipalModule)

      }]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
