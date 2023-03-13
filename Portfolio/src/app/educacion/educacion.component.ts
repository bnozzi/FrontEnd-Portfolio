import { Component, OnInit } from '@angular/core';
import { Educacion } from '../clases/edit/educacion';
import { AuthService } from '../service/auth.service';
//import { EditComponent } from '../edit/edit.component';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educacion: any;
  listEducation: Educacion[] = [];
  dateFrom: string = '';

  constructor(private educacionData: GetDataService, private auth: AuthService) {
    this.educacion;
  }

  ngOnInit(): void {
    this.educacionData.obtenerDatos().subscribe((data) => {
      this.educacion = data.educacion;
      this.educacion.forEach((element: any) => {
        this.listEducation.push(
          new Educacion(
            element.id,
            element.nameItem,
            element.image,
            element.time,
            element.aclaracion,
            element.detalle,
            element.cardReference,
            element.btnReference
          )
        );
      });
    });
  }
  //*Listo
  //!add new Education listo
  createEducationObject(
    name: string,
    img: string,
    time: string,
    detalle: string
  ): Educacion {
    return new Educacion(
      this.listEducation.length + 1,
      name,
      img,
      time,
      '',
      detalle,
      '#list-' + this.listEducation.length + 2,
      'list-' + this.listEducation.length + 2 + '-list'
    );
  }

  //! Delete education 
  deleteEducationObject(id:number) {
    let educationDelete=this.listEducation.find(educacion=>{
      return educacion.id==id    
    })
    if (educationDelete !== undefined) {
      this.listEducation.splice(this.listEducation.indexOf(educationDelete),1);
    }
    
    //todo cuando borro un objeto de listEducation seleccionar como activo al primer elemento

    document.getElementsByClassName("tab-pane fade")[0].classList.add("active")
    document.getElementsByClassName("tab-pane fade")[0].classList.add("show")

    let htmlButtonsCollection = document.getElementById("list-tab")?.children;
    let buttonsArray = Array.prototype.slice.call(htmlButtonsCollection);
    buttonsArray[0].classList.add('active');
    buttonsArray[0].style.color=" rgb(100, 255, 218)";
    buttonsArray[0].setAttribute("aria-selected", "true")


  }

  //*Listo
  //!fill edit form data
  id!: number;
  titulo!: string;
  imagen!: string;
  fechaDesde!: string;
  fechaHasta!: string;
  tiempo!: string;
  detalle!: string;
  actualmente!: boolean;
  fillEditFormData(educacion: Educacion) {
    console.log(educacion);
    educacion.setActualmente();
    //actualmente falso
    if (!educacion.actualmente) {
      this.actualmente = false;
      educacion.setFromDate();
      educacion.setToDate();
    }
    //actualmente verdadero
    else {
      this.actualmente = true;
    }

    this.id = educacion.id;
    this.titulo = educacion.nameItem;
    this.imagen = educacion.image;
    this.fechaDesde = educacion.timeFrom;
    this.fechaHasta = educacion.timeTo;
    this.detalle = educacion.detalle;
  }

  actualmentePressed() {
    this.actualmente = !this.actualmente;
  }

  //? update templete when confirm //save data
  updateTemplate() {
    if (confirm('seguro de actualizar los datos?')) {
      this.listEducation.forEach((educacion) => {
        if (educacion.id == this.id) {
          educacion.nameItem = this.titulo;
          educacion.image = this.imagen;
          educacion.detalle = this.detalle;
          if (!this.actualmente) {
            educacion.timeFrom = this.fechaDesde;
            educacion.timeTo = this.fechaHasta;
            educacion.formatTimeFromTo();
          } else {
            educacion.time = 'Actualmente';
          }
        }
      });
    }
  }



  isLogedin(){
    return this.auth.isLoggedIn
   }  
}
