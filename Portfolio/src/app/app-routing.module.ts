import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AddEducationComponent } from './add-education/add-education.component';
import { EditEducacionComponent } from './edit-educacion/edit-educacion.component';


const rutas:Routes=[

  {path: 'login', component:LoginComponent},
  {path:"", component:PortfolioComponent},
  { path:"addEducation" , component: AddEducationComponent},
  { path:"editEducation/:id" , component: EditEducacionComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
