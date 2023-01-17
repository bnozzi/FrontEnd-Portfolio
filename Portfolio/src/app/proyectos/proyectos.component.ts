import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectos:any
  constructor(private ProyectosData:GetDataService) { }

  ngOnInit(): void {
  this.ProyectosData.obtenerDatos().subscribe(data=> this.proyectos=data.proyectos)
  }

}
