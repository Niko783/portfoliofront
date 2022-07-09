import { Component, OnInit } from '@angular/core';
import { style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent{
  titulo = "Niko Lopez"//Esto se muestra, mientras no tenga un cambio por rutas
  imageURL = "./assets/Recursos/images/luna.png"
  alt = "Modo Oscuro"
  noche;
  
  constructor(private router: Router) { }
  
  ngOnInit(){
    if(localStorage.getItem('modo') == 'oscuro'){
      this.noche = true;
      this.modoOscuro();
    }
    else{
      this.noche = false;
      this.modoClaro();
    }
    localStorage.setItem('logged', 'false');
    this.router.navigate(['home']);
  }

  modo(){
    if(this.noche){
      this.modoClaro();
    }
    else{
      this.modoOscuro();
    }
  }

  modoClaro(){
    localStorage.setItem('modo', 'claro');
    this.imageURL = "./assets/Recursos/images/sol.png";
    this.alt = "Modo Claro";
    this.noche = false;
    document.documentElement.style.setProperty('--colorFondo', 'white');
    document.documentElement.style.setProperty('--colorFondoTransparente', 'rgba(255,255,255,0.9)');
    document.documentElement.style.setProperty('--colorBorder', 'rgb(50,50,50) 5px outset');
    document.documentElement.style.setProperty('--color1', 'deepskyblue');
    document.documentElement.style.setProperty('--color2', 'blue');
    document.documentElement.style.setProperty('--color3', 'orange');
    document.documentElement.style.setProperty('--color4', 'white');
    document.documentElement.style.setProperty('--color5', 'black');
    document.documentElement.style.setProperty('--color6', 'rgb(50,50,50)');
    document.documentElement.style.setProperty('--color7', 'rgb(205,205,205)');
    document.body.style.background = 'url("./assets/Recursos/images/cb2.PNG") center center fixed';
  }

  modoOscuro(){
    localStorage.setItem('modo', 'oscuro');
    this.imageURL = "./assets/Recursos/images/luna.png";
    this.alt = "Modo Oscuro";
    this.noche = true;
    document.documentElement.style.setProperty('--colorFondo', 'black');
    document.documentElement.style.setProperty('--colorFondoTransparente', 'rgba(0,0,0,0.9)');
    document.documentElement.style.setProperty('--colorBorder', 'rgb(205,205,205) 5px outset');
    document.documentElement.style.setProperty('--color1', 'lime');
    document.documentElement.style.setProperty('--color2', 'yellow');
    document.documentElement.style.setProperty('--color3', 'cyan');
    document.documentElement.style.setProperty('--color4', 'black');
    document.documentElement.style.setProperty('--color5', 'white');
    document.documentElement.style.setProperty('--color6', 'rgb(205,205,205)');
    document.documentElement.style.setProperty('--color7', 'rgb(50,50,50)');
    document.body.style.background = 'url("./assets/Recursos/images/cg6.PNG") center center fixed';
  }
}