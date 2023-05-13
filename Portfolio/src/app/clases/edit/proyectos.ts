export class Proyectos {

    image:string=""
    titulo:string="";
    detalle:string="";
    tecnologias:Array<string>=[];
    live_link:string="";
    git_link:string=""
    constructor(image:string,titulo:string,detalle:string, tecnologias: Array<string>,live_link:string ,git_link:string){

            this.image=image    
            this.titulo=titulo;
            this.detalle=detalle;
            this.tecnologias=tecnologias;
            this.live_link=live_link
            this.git_link=git_link
    }

    addTecnologias(tecnologias: any){
        this.tecnologias.push(tecnologias)
    }
   
    public getTecnologias(){
        return this.tecnologias
    }


}
