import { Component, OnInit } from '@angular/core';
import { Skill } from '../clases/edit/skill';
import { AuthService } from '../service/auth.service';
import { GetDataService } from '../service/get-data.service';
import { SkillsService } from '../service/skills.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
loadingAdd=false;
loadingDelete=false;
loadingEdit=[];

  deleteSkillFromList(skill: Skill) {
    this.auxListSkills.splice(this.auxListSkills.indexOf(skill), 1);
    this.formularioEditSkills
      .get('habilidades')
      ?.patchValue(this.ListOfNameOfSkills());
    console.log(this.formularioEditSkills.value);
  }

  createSkill(skill: string) {
    return new Skill(skill);
  }

  addSkillToListObject(skill: any, formulario: FormGroup) {
    this.auxListSkills.push(skill);

    console.log(this.auxListSkills);
    formulario.get('habilidades')?.patchValue(this.ListOfNameOfSkills());
    console.log(formulario.value);
  }

  ListOfNameOfSkills() {
    let lista: any[] = [];
    this.auxListSkills.forEach((skill: any) => {
      lista.push(skill.nombre);
    });
    console.log(lista);
    return lista;
  }

  setFormularioBeforeSend(formulario: any) {
    formulario.get('habilidades')?.patchValue(this.ListOfNameOfSkills());
  }

  whiteFormToAdd() {
    this.formularioAddSkill.reset();
    this.auxListSkills = [];
  }

  fillForm(categoria: any) {
    this.formularioEditSkills.patchValue(categoria);
    this.defaultListSkills(categoria);

    //console.log(this.auxListSkills)
  }
  defaultListSkills(categoria: any) {
    this.auxListSkills = [];
    categoria.habilidades.forEach((skill: any) => {
      this.auxListSkills.push(this.createSkill(skill));
    });
  }

  skills: any;
  formularioEditSkills: FormGroup;
  auxListSkills: Array<Skill> = [];

  formularioAddSkill: FormGroup;
  mensajeResponse: string = '';
  colorAlert: string = 'alert-success';

  changeColorAlert(color: string) {
    this.colorAlert = color;
  }

  constructor(
    private skillsData: SkillsService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.formularioEditSkills = formBuilder.group({
      id: '',
      habilidades: [],
      nombre: '',
    });

    this.formularioAddSkill = formBuilder.group({
      id: '',
      habilidades: [],
      nombre: '',
    });
  }

  ngOnInit(): void {
    this.skillsData.getSkills().subscribe((data) => {
      this.skills = data.map((item: any) => {
        return { ...item, loadingEdit: false, loadingDelete: false };
      });
    },
    (error)=>{
      this.ngOnInit()
    })
    ;
  }
  

  saveSkill(formulario: any) {
    this.loadingAdd=true
    this.setFormularioBeforeSend(formulario);
    this.skillsData.addSkill(formulario.value).subscribe((data) => {
      this.changeColorAlert('alert-success');
      this.mensajeResponse=data.mensaje
      this.ngOnInit();
    this.loadingAdd=false

    },
    (err)=>{
      this.loadingAdd=false

    }
    );
  }

  deleteSkill(categoria: any, id: any) {
    categoria.loadingDelete=true

    this.skillsData.deleteSkill(id).subscribe((data) => {
      this.changeColorAlert('alert-danger');
      this.mensajeResponse=data.mensaje
      this.ngOnInit();
      categoria.loadingDelete=false


    },(err)=>{
      categoria.loadingDelete=false

    });
  }

  updateSkill(formulario: any, id: any) {
    this.setFormularioBeforeSend(formulario);
  this.skills.forEach((skill: any)=>{
    if(skill.id==id){
      skill.loadingEdit=true
    }
  })
    this.skillsData.updateSkill(formulario.value, id).subscribe((data) => {
      this.changeColorAlert('alert-warning');
      this.mensajeResponse=data.mensaje
      this.ngOnInit();
      this.skills.forEach((skill: any)=>{
        if(skill.id==id){
          skill.loadingEdit=false
        }
      })
    },err=>{
      this.skills.forEach((skill: any)=>{
        if(skill.id==id){
          skill.loadingEdit=false
        }
      })

    });
  }

  isLogedin() {
    return this.auth.isLoggedIn;
  }
}
