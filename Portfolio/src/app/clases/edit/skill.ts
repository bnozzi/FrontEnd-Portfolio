export class Skill {
    skill!:string;
    disableEditSkill:boolean=true;
constructor(skill:string){
    this.skill = skill;
}

editName(name:string){
this.skill=name
}

}
