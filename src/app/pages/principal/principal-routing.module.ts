import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import { PrincipalComponent } from "./principal.component";

const routes: Routes = [
  {
  path: 'principal',
  component: PrincipalComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PrincipalRoutingModule {

}
