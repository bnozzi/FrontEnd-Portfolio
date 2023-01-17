import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  
  aboutMe:any;

  constructor(private aboutmeData:GetDataService) {
    // this.aboutMe
  }

  ngOnInit(): void {
    this.aboutmeData.obtenerDatos().subscribe(data => this.aboutMe=data.PersonalData);
  }

}
