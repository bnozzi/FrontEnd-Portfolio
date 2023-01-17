import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any
  constructor(private skillsData:GetDataService) { }

  ngOnInit(): void {
    this.skillsData.obtenerDatos().subscribe(data => this.skills = data.skills)

  }

}
