import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Persona } from '../clases/edit/persona';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
updateTemplate() {
this.aboutMeObject.aboutMe=this.profileImg
this.aboutMeObject.aboutMe=this.bannerImg
this.aboutMeObject.aboutMe=this.descripcion

this.cdRef.detectChanges();

}
  
  aboutMe:any;
  aboutMeObject!:Persona
profileImg: string=""
bannerImg: string=""
descripcion: string=""
  constructor(private aboutmeData:GetDataService ,private cdRef: ChangeDetectorRef) {
    // this.aboutMe
  }

  ngOnInit(): void {
    this.aboutmeData.obtenerDatos().subscribe(data =>{
    
      this.aboutMe=data.PersonalData
      this.aboutMeObject=new Persona(this.aboutMe.name,this.aboutMe.profileImg,
        this.aboutMe.bannerImg, this.aboutMe.aboutMe)

        this.profileImg=this.aboutMeObject.profileImg;
        this.bannerImg=this.aboutMeObject.bannerImg;
        this.descripcion=this.aboutMeObject.aboutMe;

    });

    
    
      
  }
  



}
