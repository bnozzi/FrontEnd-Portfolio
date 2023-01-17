import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:any;
  
  constructor(private educacionData:GetDataService) { 
    this.educacion
  }

  



  ngOnInit(): void {
    this.educacionData.obtenerDatos().subscribe(data => this.educacion=data.educacion);
    
  }

}
