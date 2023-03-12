export class Educacion {
      id!:number
      nameItem!:string
      image!: string
      time!:string
      aclaracion!:string
      detalle!: string
      selected:boolean=false
      cardReference:string="" // "#list-1",
      btnReference:string =""//list-1-list
      timeFrom!:string 
      timeTo!:string
      actualmente:boolean=false

      constructor(id:number, name?: string, img?: string, time?:string, aclaracion?: string, detalle?: string, cardReference?: string, btnReference?:string) {
        this.id= id
        this.nameItem = name || '';
        this.image = img || '';
        this.time=time || ''
        this.aclaracion = aclaracion || '';
        this.detalle = detalle || '';
        this.cardReference=cardReference || '';
        this.btnReference=btnReference || '';

    }

    setActualmente(){
      
      console.log(this.time , this.actualmente)
      if(this.time=="Actualmente"){
        this.actualmente=true
      }
      else{
        this.actualmente=false
        
      }
    }


    setFromDate() {
     //? time = mm/yyyy - mm/yyyy
      const year = this.time.slice(3, 7);
      const month = this.time.slice(0, 2);
      this.timeFrom = year + "-" + month;
    }
    
    setToDate() {
     //? time = mm/yyyy - mm/yyyy
      const month = this.time.slice(this.time.indexOf('-')+2 ,this.time.indexOf('-') + 4 );
      const year = this.time.slice(this.time.indexOf('-') + 5,this.time.length);
      this.timeTo = year + "-" + month;

    }

    formatTimeFromTo(){
      this.timeFrom=this.timeFrom.replace("-","/")
      this.timeTo=this.timeTo.replace("-","/")
      
      this.timeFrom=this.cambiarOrdenMesAño(this.timeFrom)
      this.timeTo=this.cambiarOrdenMesAño(this.timeTo)
      
      this.time= this.timeFrom+" - "+this.timeTo
    }
    
    cambiarOrdenMesAño(fecha:string) {
      var partes = fecha.split('/');
      var nuevaFecha = partes[1] + '/' + partes[0];
      return nuevaFecha;
    }

  }
