import { Component, OnInit } from '@angular/core';
import { Skill } from '../clases/edit/skill';
import { Skills } from '../clases/edit/skills';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: any;
  listSkills: Array<Skills> = [];
  auxListSkills: Array<Skills> = [];
  editedSkill: any;

  constructor(private skillsData: GetDataService) {}

  ngOnInit(): void {
    this.skillsData.obtenerDatos().subscribe((data) => {
      this.skills = data.skills;

      this.skills.forEach((skill: any) => {
        const skillsObjectList: Skill[] = [];
        const auxskillsObjectList: Skill[] = [];
        skill.items.forEach((element: string) => {
          skillsObjectList.push(new Skill(element));
          auxskillsObjectList.push(new Skill(element));
        });

        this.listSkills.push(new Skills(skill.name, skillsObjectList.slice()));
        this.auxListSkills.push(
          new Skills(skill.name, auxskillsObjectList.slice())
        );
      });
      // console.log(this.listSkills);

      // console.log(this.auxListSkills);
    });
  }

  skillSelected: any;

  createCategory(nombreCategoria: string) {
    this.auxListSkills.push(new Skills(nombreCategoria, []));
  }
  deleteCategory(category: Skills) {
    if (
      confirm(
        'Are you sure you want to delete, will be deleted the skills too :c'
      )
    ) {
      this.auxListSkills.splice(this.auxListSkills.indexOf(category), 1);
    }
  }

  addSkill(categoria: Skills, skill: Skill) {
    categoria.addSkill(skill);
  }
  crearSkill(skill: string) {
    return new Skill(skill);
  }

  deleteSkill(categoria: Skills, skill: Skill) {
    categoria.deleteSkill(skill);
  }

  saveChanges() {

    if (confirm('sure?')) {
      this.listSkills = []
      // ? [{ "catgoria",[ {skills} ] }]

      console.log(JSON.parse(JSON.stringify(this.auxListSkills)))
      JSON.parse(JSON.stringify(this.auxListSkills)).forEach((listSkill:any) => {
        const skillsObjectList: Skill[] = [];
        listSkill.skills.forEach((skill:any)=>{
          skillsObjectList.push(new Skill(skill.skill))
        })

        this.listSkills.push(new Skills(listSkill.categoria, skillsObjectList.slice()))
        console.log(skillsObjectList)
      })
      console.log(this.listSkills)
    } else {
      this.auxListSkills =[] 
      this.skills.forEach((skill: any) => {
        const skillsObjectList: Skill[] = [];
        skill.items.forEach((element: string) => {
          skillsObjectList.push(new Skill(element));
        });

        this.auxListSkills.push(new Skills(skill.name, skillsObjectList.slice()));

      });
    }
    //console.log(JSON.parse(JSON.stringify(  this.auxListSkills)))
    //console.log(JSON.parse(JSON.stringify( this.listSkills)))

  }

}
