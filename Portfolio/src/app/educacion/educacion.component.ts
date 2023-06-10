import { Component, OnInit } from '@angular/core';
import { Educacion } from '../clases/edit/educacion';
import { AuthService } from '../service/auth.service';
import { EducacionService } from '../service/educacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  providers: [DatePipe],
})
export class EducacionComponent implements OnInit {
  educacion: any;

  // formEduAdd:FormGroup;
  // formEduEdit!:FormGroup;

  mensajeResponse: string = '';
  colorAlert: string = 'alert-success';
  loading=false;

  changeColorAlert(color: string) {
    this.colorAlert = color;
  }

  constructor(
    private educacionData: EducacionService,
    private auth: AuthService,
    formBuilder: FormBuilder,
    private datePipe: DatePipe,
    public router: Router
  ) {

    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.mensajeResponse = navigation.extras.state['response'].mensaje;
      if (this.mensajeResponse=="educacion actualizada"){
        this.changeColorAlert("alert-warning")
      }
      else{
        this.changeColorAlert("alert-success")
      }
    }
  }

  //html functions
  public activeTab = 0;

  public setActiveTab(index: number) {
    this.activeTab = index;
  }

  ngOnInit(): void {
    this.educacionData.getEducacion().subscribe((data) => {
      this.educacion = data;
      console.log(data)
    },
    (error) => {
      this.mensajeResponse=error.error.message
      this.changeColorAlert("alert-danger")
      
    });
    console.log(this.mensajeResponse)
  }

  updateEducation() {
    //route
        this.changeColorAlert('alert-warning');
        this.ngOnInit();
  }

  addNewEducation() {
     this.changeColorAlert("alert-success")
  }



  deleteEducation(id: number) {
    this.loading=true
    this.changeColorAlert('alert-danger');
    this.educacionData.deleteEducation(id).subscribe((data) => {
      this.mensajeResponse = data.mensaje;

      this.ngOnInit();
      this.loading=false
    },
    (error) => {
      this.mensajeResponse=error.error.message
      this.changeColorAlert("alert-danger")
        this.loading=false;

      
    }
    );
  }

  //format date
  formatoMesAnio(fecha: string): string {
    const fechaDate = new Date(fecha);
    const mes = fechaDate.getMonth() + 1;
    const anio = fechaDate.getFullYear();
    return `${mes.toString().padStart(2, '0')}/${anio}`;
  }

  isLogedin() {
    return this.auth.isLoggedIn;
  }
}
