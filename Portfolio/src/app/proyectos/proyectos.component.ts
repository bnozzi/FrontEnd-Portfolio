import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../clases/edit/proyectos';
import { AuthService } from '../service/auth.service';
import { GetDataService } from '../service/get-data.service';
import { ProyectosService } from '../service/proyectos.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  setEditFormValue(proyecto: any) {
    this.ngOnInit();
    this.formularioEdit.patchValue(proyecto);
  }

  addTecnoEditForm(tecnologia: string) {
    this.formularioEdit.get('tecnologias')?.value.push(tecnologia);
  }
  deleteTecnoEditForm(tecnologia: string) {
    this.formularioEdit
      .get('tecnologias')
      ?.value.splice(
        this.formularioEdit.get('tecnologias')?.value.indexOf(tecnologia),
        1
      );
  }

  proyectos: any;
  formularioAdd: FormGroup;
  listTecnoAddForm: any;
  formularioEdit: FormGroup;
  listTecnoEditForm: any;
  mensajeResponse: string = '';
  colorAlert: string = 'alert-success';

  loadingDelete = false;
  loadingEdit = false;
  loadingAdd = false;


  changeColorAlert(color: string) {
    this.colorAlert = color;
  }

  constructor(
    private ProyectosData: ProyectosService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.formularioAdd = this.formBuilder.group({
      imagenProyecto: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      tecnologias: this.formBuilder.array([]),
      url: ['', [Validators.required]],
      urlRepositorio: ['', [Validators.required]],
    });
    this.listTecnoAddForm = this.formularioAdd.get('tecnologias') as FormArray;

    this.formularioEdit = this.formBuilder.group({
      id: [''],
      imagenProyecto: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      tecnologias: [],
      url: ['', [Validators.required]],
      urlRepositorio: ['', [Validators.required]],
    });

    // this.listTecnoEditForm = this.formularioEdit.get(
    // 'tecnologias'
    // ) as FormArray;
  }

  get ImagenProyecto() {
    return this.formularioAdd.get('imagenProyecto');
  }
  get Titulo() {
    return this.formularioAdd.get('titulo');
  }
  get Descripcion() {
    return this.formularioAdd.get('descripcion');
  }
  get Tecnologias() {
    return this.formularioAdd.get('tecnologias');
  }
  set Tecnologias(value: any) {
    this.formularioAdd.setValue(value);
  }
  get Url() {
    return this.formularioAdd.get('url');
  }
  get UrlRepositorio() {
    return this.formularioAdd.get('urlRepositorio');
  }

  get ImagenProyectoEdit() {
    return this.formularioEdit.get('imagenProyecto');
  }
  get TituloEdit() {
    return this.formularioEdit.get('titulo');
  }
  get DescripcionEdit() {
    return this.formularioEdit.get('descripcion');
  }
  get TecnologiasEdit() {
    return this.formularioEdit.get('tecnologias');
  }
  get UrlEdit() {
    return this.formularioEdit.get('url');
  }
  get UrlRepositorioEdit() {
    return this.formularioEdit.get('urlRepositorio');
  }

  ngOnInit(): void {
    this.ProyectosData.getPoyects().subscribe((data) => {
      this.proyectos = data;
    });
  }

  //interaccion con el componente
  deleteTecnologyFromListInFormAdd(tecnologiaId: any) {
    this.listTecnoAddForm.removeAt(tecnologiaId);
  }
  addTecnoAddForm(tecnologia: string) {
    this.listTecnoAddForm.push(this.formBuilder.control(tecnologia));
  }

  //peticiones
  addProyect(formulario: FormGroup) {
    this.loadingAdd = true;
    this.ProyectosData.addProyect(formulario.value).subscribe((data) => {
      this.changeColorAlert('alert-success');
      this.mensajeResponse = data.mensaje;
      this.loadingAdd = false;
      this.ngOnInit();
    },
    (error)=>{
      this.loadingAdd = false;

    });

  }

  deleteProyect(id: any) {
    this.loadingDelete = true;
    this.ProyectosData.deleteProyectById(id).subscribe((data) => {
      this.changeColorAlert('alert-danger');
      this.mensajeResponse = data.mensaje;
      this.ngOnInit();
      this.loadingDelete = false;
    },
    (error)=>{
      this.loadingDelete = false;

    });

  }

  updateProyect(formulario: FormGroup, id: any) {
    this.loadingEdit = true;
    this.ProyectosData.updateProyect(formulario.value, id).subscribe((data) => {
      this.changeColorAlert('alert-warning');
      this.mensajeResponse = data.mensaje;
      this.loadingEdit = false;
      this.ngOnInit();
    },
    (error)=>{
      this.loadingEdit = false;
    });


  }

  isLogedIn() {
    return this.auth.isLoggedIn;
  }
}
