import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from '../service/educacion.service';
import { AuthService } from '../service/auth.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
  providers: [DatePipe],
})
export class EditEducacionComponent implements OnInit {
  formEduEdit!: FormGroup;
  idRuta: string = '';
  loading=false
  failSendForm: boolean = false;
  formLoaded=false


  constructor(
    private educacionData: EducacionService,
    private auth: AuthService,
    formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.formEduEdit = formBuilder.group({
      id: '',
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      tiempoDesde: ['', [Validators.required]],
      tiempoHasta: ['', [Validators.required]],
      actualmente: [false, [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  this.formLoaded=false
    
    this.notLoged();

    this.route.params.subscribe((params) => {
      this.idRuta = params['id'];
      console.log(this.idRuta);
    });

    this.educacionData.getEducacionById(this.idRuta).subscribe((element) => {
      this.formEduEdit.setValue({
        id: element.id,
        titulo: element.titulo,
        imagen: element.imagen,
        tiempoDesde: element.tiempoDesde,
        tiempoHasta: element.tiempoHasta,
        actualmente: element.actualmente,
        descripcion: element.descripcion,
      });
    this.formLoaded=true

    });

    this.formEduEdit.value.tiempoDesde = this.datePipe.transform(
      this.formEduEdit.value.tiempoDesde,
      'dd-MM-yyyy'
    );

    this.formEduEdit.value.tiempoHasta = this.datePipe.transform(
      this.formEduEdit.value.tiempoHasta,
      'dd-MM-yyyy'
    );
  }

  get IdEdit() {
    return this.formEduEdit.get('id');
  }
  get TituloEdit() {
    return this.formEduEdit.get('titulo');
  }
  get ImagenEdit() {
    return this.formEduEdit.get('imagen');
  }
  get TiempoDesdeEdit() {
    return this.formEduEdit.get('tiempoDesde');
  }
  get TiempoHastaEdit() {
    return this.formEduEdit.get('tiempoHasta');
  }
  get ActualmenteEdit() {
    return this.formEduEdit.get('actualmente');
  }
  get DescripcionEdit() {
    return this.formEduEdit.get('descripcion');
  }

  clearValidatorsIfActualmente() {
    console.log(this.formEduEdit)
    if (this.ActualmenteEdit?.value == true) {
      this.TiempoDesdeEdit?.clearValidators();
      this.TiempoDesdeEdit?.updateValueAndValidity(); // actualizar estado de validación
      this.TiempoHastaEdit?.clearValidators();
      this.TiempoHastaEdit?.updateValueAndValidity(); // actualizar estado de validación
    } else {
      this.TiempoDesdeEdit?.setValidators([Validators.required]);
      this.TiempoDesdeEdit?.updateValueAndValidity(); // actualizar estado de validación
      this.TiempoHastaEdit?.setValidators([Validators.required]);
      this.TiempoHastaEdit?.updateValueAndValidity(); // actualizar estado de validación
      this.ActualmenteEdit?.clearValidators();
      this.ActualmenteEdit?.updateValueAndValidity(); // actualizar estado de validación
    }
  }

  updateEducation(formulario: FormGroup) {
    this.clearValidatorsIfActualmente()
    this.loading=true
    if (formulario.value.actualmente == true) {
      formulario.value.tiempoDesde = '';
      formulario.value.tiempoHasta = '';
    } else {
      formulario.value.tiempoDesde = this.datePipe.transform(
        formulario.value.tiempoDesde,
        'yyyy-MM-dd'
      );
      formulario.value.tiempoHasta = this.datePipe.transform(
        formulario.value.tiempoHasta,
        'yyyy-MM-dd'
      ); //
    }
    if (formulario.valid) {
      this.educacionData
        .updateEducation(formulario.value, formulario.value.id)
        .subscribe((data) => {
          this.loading=false
          this.failSendForm=false
          this.goToHome(data);
        },
        (error)=>{
          this.response=error.error.message
          this.loading=false
        });
    }
    else{
      this.loading=false
      this.failSendForm=true
 
    }
  }
  response:any="";
  goToHome(response: any) {
    this.response=response
    this.router.navigate(['/'], { state: { response }, fragment: 'educacion' });
  }
  notLoged() {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
}
