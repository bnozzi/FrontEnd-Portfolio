import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  email: any;
  name: any;
  message:any

  constructor(private sendData:MessageService) { }

  ngOnInit(): void {
  }
  
  sendForm(body:any){
    console.log(body);
    this.sendData.SendToFormspree(body).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        // Maneja la respuesta del servidor aquí
        
        this.closeModal()
      },
      error => {
        console.error('Error en la solicitud:', error);
        // Maneja el error aquí
      }
    );
  }
  
  closeModal() {
    const modal = document.getElementById!('exampleModal');
    modal!.classList.remove('show');
    modal!.setAttribute('aria-hidden', 'true');
    modal!.setAttribute('style', 'display: none');
  
    const modalBackdrops = document.getElementsByClassName!('modal-backdrop');
    for (let i = 0; i < modalBackdrops.length; i++) {
      modalBackdrops[i].parentNode!.removeChild(modalBackdrops[i]);
    }
  
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-open');
    body.removeAttribute('style');
  }
  
}


