import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../clases/edit/proyectos';
import { AuthService } from '../service/auth.service';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
setDefaultAtt() {
  this.imagen=""
  this.titulo=""
  this.Detalle=""
  this.Tecnologias=[]
  this.live=""
  this.git=""

}
proyectos:any
listProyects:Proyectos[]=[]
  constructor(private ProyectosData:GetDataService , private auth:AuthService) { }

  ngOnInit(): void {
  this.ProyectosData.obtenerDatos().subscribe(data=> {
    this.proyectos=data.proyectos
    this.proyectos.forEach((proyecto:any) => {
      this.listProyects.push(new Proyectos(proyecto.image, proyecto.title,proyecto.detalle,proyecto.tecnologias, proyecto.live_link,proyecto.git_link ))
    });
  
  })
  }


  proyecto = new Proyectos("","","",[],"","");

  imagen!:string
  titulo!:string
  Detalle!:string
  Tecnologias:Array<string>=[]
  live!:string
  git!:string

  proyectoSelected:Proyectos=new Proyectos("","","",[],"","")


  fillFormDataWithSpecificObject(proyecto:Proyectos){
    console.log(proyecto)
    this.proyectoSelected=proyecto
    this.imagen=proyecto.image
    this.titulo=proyecto.titulo
    this.Detalle=proyecto.detalle
    this.Tecnologias= JSON.parse(JSON.stringify(proyecto.getTecnologias())) 
    this.live=proyecto.live_link
    this.git=proyecto.git_link


  }

  deleteTecnologias(tecnologia: string){
    this.Tecnologias.splice(this.Tecnologias.indexOf(tecnologia),1)
}
addTecnologia(tecnologia: string){
  this.Tecnologias.push(tecnologia)
}

updateTempleteWhenEdit(){
  this.proyectoSelected.titulo=this.titulo
  this.proyectoSelected.image=this.imagen
  this.proyectoSelected.detalle= this.Detalle
  this.proyectoSelected.tecnologias= this.Tecnologias
  this.proyectoSelected.live_link= this.live
  this.proyectoSelected.git_link= this.git
}
updateTempleteWhenCreate(){

this.listProyects.push(new Proyectos(this.imagen
  ,this.titulo
  ,this.Detalle
  ,this.Tecnologias
  ,this.live
  ,this.git))

}

deleteProyecto(proyecto: Proyectos){
  this.listProyects.splice(this.listProyects.indexOf(proyecto),1)
//todo set active the first proyect of listProyect
document.getElementsByClassName("carousel-item")[0].classList.add("active")

}



isLogedIn(){
  return this.auth.isLoggedIn
}


  


}
