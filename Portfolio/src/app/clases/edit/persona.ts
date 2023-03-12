export class Persona {

    name!:string 
    profileImg!:string
    bannerImg!:string
    aboutMe!:string

    constructor(nombre:string, imgPerfil:string, imgBanner:string , detalle:string){
        this.name=nombre
        this.profileImg=imgPerfil       
        this.bannerImg=imgBanner
        this.aboutMe=detalle
    }

}
