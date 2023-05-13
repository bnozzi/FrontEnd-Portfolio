export class Skill {
    nombre!:string;
    disableEditSkill:boolean=true;
constructor(skill:string){
    this.nombre = skill;
}

editName(name:string){
this.nombre=name
}



}
