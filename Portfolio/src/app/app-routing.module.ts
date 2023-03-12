import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const rutas:Routes=[

  {path: 'login', component:LoginComponent},
  {path:"", component:PortfolioComponent},
  //{ path:"edit" , component: EditComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
