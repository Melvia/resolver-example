import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HelpComponent} from "./help/help.component";
import {AboutComponent} from "./about/about.component";
import {DataService} from "./data.service";

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent,
    resolve: {
      employees: DataService
    }},
  {path: "about", component: AboutComponent},
  {path: "help", component: HelpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
