import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-splash',
  templateUrl: './button-splash.component.html',
  styleUrls: ['./button-splash.component.scss']
})
export class ButtonSplashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const button = document.querySelector(".button");
    button?.addEventListener("click", (e) => {
      e.preventDefault;
      button?.classList.add("animate");
      setTimeout(() => {
          button?.classList.remove("animate");
      }, 600);
      });
  }


  

  

}
