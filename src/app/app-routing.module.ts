import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ListaPerComponent } from "./home/lista-per/lista-per.component";
import { PersComponent } from "./home/lista-per/pers/pers.component";
import { AboutComponent } from "./home/about/about.component";


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch: "full"},
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"home", component: HomeComponent},
  {path:"lista-personajes", component: ListaPerComponent},
  {path:"lista-personajes/personaje", component: PersComponent},
  {path:"about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
