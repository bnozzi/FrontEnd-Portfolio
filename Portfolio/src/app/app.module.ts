import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { NgModel, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './service/auth-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutMeComponent,
    ProyectosComponent,
    EducacionComponent,
    SkillsComponent,
    FooterComponent,
    EditComponent,
    LoginComponent,
    PortfolioComponent,

        
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,    

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
