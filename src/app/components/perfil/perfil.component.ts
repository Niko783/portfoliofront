import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  url = "./assets/Recursos/images/moonshadow.png";

  constructor() { }

  ngOnInit(): void {
  }

 public isDarkMode():void{
    if(localStorage.getItem('modo') == 'oscuro'){
      this.url = "./assets/Recursos/images/moonshadow.png";
    }
    else{
      this.url = "./assets/Recursos/images/sunshine.png";
    }
  }
}