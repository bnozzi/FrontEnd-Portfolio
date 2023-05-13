import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Persona } from '../clases/edit/persona';
import { AuthService } from '../service/auth.service';
import { GetDataService } from '../service/get-data.service';
import { AboutMeService } from '../service/about-me.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  updateAboutMe() {

    if(this.formularioAboutMe.valid){
      this.loading=true;
    this.aboutmeData.updateAboutMe(this.formularioAboutMe.value).subscribe(
      (response) => {
        this.mensajeResponse = response.mensaje;
        this.changeColorAlert('alert-warning');
        this.ngOnInit();
        this.loading=false;
      },
      (error) => {
        this.mensajeResponse = error.error.message;
        this.changeColorAlert('alert-danger');
        this.loading=false;

      }
    );
  }

  }

  aboutMe: any;
  formularioAboutMe!: FormGroup;
  colorAlert: string = '';
  mensajeResponse: string = '';
  loading = false;

  changeColorAlert(color: string) {
    this.colorAlert = color;
  }

  constructor(
    private aboutmeData: AboutMeService,
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.aboutmeData.getAboutMe().subscribe((data) => {
      this.aboutMe = data;

      this.formularioAboutMe = this.formBuilder.group({
        imagenPerfil: [this.aboutMe.imagenPerfil || '', Validators.required],
        bannerImagen: [this.aboutMe.bannerImagen || '', Validators.required],
        descripcion: [this.aboutMe.descripcion || '', Validators.required],
      });
    });
  }

  get ImagenPerfil() {
    return this.formularioAboutMe.get('imagenPerfil');
  }
  get BannerImagen() {
    return this.formularioAboutMe.get('bannerImagen');
  }
  get Decripcion() {
    return this.formularioAboutMe.get('descripcion');
  }

  isLogedin() {
    return this.auth.isLoggedIn;
  }
}
