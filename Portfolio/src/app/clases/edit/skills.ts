import { Skill } from "./skill";

export class Skills {
categoria!: string;
skills!: Array<Skill>;

disableEditCategoria:boolean=true;



constructor(categoria:string, skills:Array<Skill>){
this.categoria=categoria
this.skills=skills
}
setCategoria(categoria:string){
    this.categoria=categoria
}

addSkill(skill: Skill){
    this.skills.push(skill);
}

deleteSkill(skill: Skill){
    if ( confirm("Are you sure you want to delete?")){
        this.skills.splice(this.skills.indexOf(skill),1)
    }
}





}
