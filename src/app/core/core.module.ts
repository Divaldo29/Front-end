import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './main-page/header/header.component';
import { FooterComponent } from './main-page/footer/footer.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PrincipalFooterComponent } from './pagina-principal/principal-footer/principal-footer.component';
import { PrincipalHeaderComponent } from './pagina-principal/principal-header/principal-header.component';



@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    PaginaPrincipalComponent,
    PrincipalFooterComponent,
<<<<<<< HEAD
    PrincipalHeaderComponent
=======
    PrincipalHeaderComponent,

>>>>>>> ad020e6602ceaec246f794b7df7cc80672b3fb9a
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule { }
