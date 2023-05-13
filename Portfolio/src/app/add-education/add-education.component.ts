import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { EducacionService } from '../service/educacion.service';
import { DatePipe } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css'],
  providers: [DatePipe],
})
export class AddEducationComponent implements OnInit {
  formEduAdd: FormGroup;
  response: any = '';
  loading = false;
  trySave: boolean = false;

  constructor(
    private educacionData: EducacionService,
    private auth: AuthService,
    formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private route: Router
  ) {
    this.formEduAdd = formBuilder.group({
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      tiempoDesde: ['',[Validators.required]],
      tiempoHasta: ['',[Validators.required]],
      descripcion: ['', [Validators.required]],
      actualmente: [false,[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.notLoged();
  }

  get TituloAdd() {
    return this.formEduAdd.get('titulo');
  }
  get ImagenAdd() {
    return this.formEduAdd.get('imagen');
  }
  get TiempoDesdeAdd() {
    return this.formEduAdd.get('tiempoDesde');
  }
  get TiempoHastaAdd() {
    return this.formEduAdd.get('tiempoHasta');
  }
  get ActualmenteAdd() {
    return this.formEduAdd.get('actualmente');
  }
  get DescripcionAdd() {
    return this.formEduAdd.get('descripcion');
  }

  clearValidatorsIfActualmente() {
if (this.ActualmenteAdd?.value == true) {
  this.TiempoDesdeAdd?.clearValidators();
  this.TiempoDesdeAdd?.updateValueAndValidity(); // actualizar estado de validación
  this.TiempoHastaAdd?.clearValidators();
  this.TiempoHastaAdd?.updateValueAndValidity(); // actualizar estado de validación
}
else {
  this.TiempoDesdeAdd?.setValidators([Validators.required]);
  this.TiempoDesdeAdd?.updateValueAndValidity(); // actualizar estado de validación
  this.TiempoHastaAdd?.setValidators([Validators.required]);
  this.TiempoHastaAdd?.updateValueAndValidity(); // actualizar estado de validación
  this.ActualmenteAdd?.clearValidators();
  this.ActualmenteAdd?.updateValueAndValidity(); // actualizar estado de validación
}
  }

  addNewEducation(formulario: FormGroup) {
    this.loading = true;
    this.clearValidatorsIfActualmente()
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
      this.loading = false;
      this.educacionData.addEducation(formulario.value).subscribe(
        (data) => {
          this.loading = false;
          this.trySave=false;
          this.goToHome(data);
        },
        (error) => {
          this.response = error.error.message;
          this.loading = false;
        }
      );
    } else {
      this.loading = false;
      this.trySave = true;
    }
  }

  goToHome(response: any) {
    this.route.navigate(['/'], { state: { response }, fragment: 'educacion' });
  }

  notLoged() {
    if (!this.auth.isLoggedIn) {
      this.route.navigate(['/login']);
    }
  }
}
