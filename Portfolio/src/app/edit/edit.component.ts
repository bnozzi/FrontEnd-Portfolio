import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../clases/edit/proyectos';
import { Skills } from '../clases/edit/skills';
import { NgModel } from '@angular/forms';
import { GetDataService } from '../service/get-data.service';
import { Skill } from '../clases/edit/skill';
import { Educacion } from '../clases/edit/educacion';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  listSkills:Skills[]=[]
  listEducation:Educacion[]=[]
  data:any
  constructor(private getData:GetDataService) {
    this.data
   }

   testlist:any[]=[]
   SaveEducationList:any[]=[]
ngOnInit(): void {
this.getData.obtenerDatos().subscribe(data=>
  {
    this.data=data
    //skills
    this.testlist=data.skills
    //console.log(this.testlist)
    this.testlist.forEach(skill=> {
      const skillsObjectList:Skill[]=[]

      skill.items.forEach((element:string)=> {
        skillsObjectList.push(new Skill(element))
})
;

      this.listSkills.push(new Skills(skill.name,skillsObjectList))

})



})

console.log(this.listEducation)
  //console.log(this.listSkills)


  //educacion


  }
  

  // seccion proyextos 

//seccion educacion
// formulario editar educacion 






  //seccion skills 

 

// *proyecto, skills, educacion  esta 
//

}
