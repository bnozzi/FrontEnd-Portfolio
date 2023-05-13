export class Persona {

    profileImg!:string
    bannerImg!:string
    aboutMe!:string

    constructor( imgPerfil:string, imgBanner:string , detalle:string){
        this.profileImg=imgPerfil       
        this.bannerImg=imgBanner
        this.aboutMe=detalle
    }

}
