import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {
  // botonIzquierdo: HTMLElement = new (HTMLElement);
  // botonDerecho: HTMLElement = new (HTMLElement);
  constructor() { }

  ngOnInit(): void {
    window.focus();
    
    // Valen los dos {
      window.onkeydown = this.keypress
      // window.addEventListener('keydown', this.keypress);
    // } 
    

    // botonIzquierdo.click()
  }

  clickDerecho() {
    console.log("clickDerecho");
    this.keypress(undefined, 39);
  }
  
  clickIzquierdo() {
    console.log("clickIzquierdo");
    this.keypress(undefined, 37);
  }  

  keypress(event: any, click?: number) {
    const botonIzquierdo = document.querySelector(`#botonIzquierdo`);
    console.log(botonIzquierdo)
    const botonDerecho = document.querySelector(`#botonDerecho`);
    switch(event?.keyCode || click) {
      case 37: console.log("Izquierda");
        botonIzquierdo?.setAttribute('class', 'button leftButton animacion');
        botonDerecho?.setAttribute('class', 'button rightButton');
        setTimeout(() => {
          botonIzquierdo?.setAttribute('class', 'button leftButton');
        }, 100);
        break;
      case 38: console.log("Arriba");
        botonIzquierdo?.setAttribute('class', 'button leftButton animacion');
        botonDerecho?.setAttribute('class', 'button rightButton animacion');
        setTimeout(() => {
          botonIzquierdo?.setAttribute('class', 'button leftButton');
          botonDerecho?.setAttribute('class', 'button rightButton');
        }, 100);
        break;
      case 39: console.log("Derecha");
        botonIzquierdo?.setAttribute('class', 'button leftButton');
        botonDerecho?.setAttribute('class', 'button rightButton animacion');
        setTimeout(() => {
          botonDerecho?.setAttribute('class', 'button rightButton');
        }, 100);
        break;
      case 40: console.log("Abajo");
        botonIzquierdo?.setAttribute('class', 'button leftButton animacion');
        botonDerecho?.setAttribute('class', 'button rightButton animacion');
        setTimeout(() => {
          botonIzquierdo?.setAttribute('class', 'button leftButton');
          botonDerecho?.setAttribute('class', 'button rightButton');
        }, 100);
        break;
    }
  // if (event.keyCode>=37 && event.keyCode<=40) {
  //   console.log("pulso la tecla " + event.key)
  // }
  }
}
