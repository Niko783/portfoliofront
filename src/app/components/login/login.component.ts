import { Component, OnInit } from '@angular/core';
import { Admin } from '../login/admin';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin:Admin = new Admin();
  user:string = "";
  password:string = "";

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
   
  }

  isLogged():boolean{
    //console.log("Is logged? " + localStorage.getItem('logged'));
    if(localStorage.getItem('logged') == 'true'){
      return true;
    }
    else{
      return false;
    }
  }

  login():void{
    //console.log("Usuario: "+this.user+" Contraseña: "+this.password);
    if(this.user == this.admin.user && this.password == this.admin.password){
      alert ("Bienvenido Administrador"); 
      document.getElementById("messages").style.display = "inline"; 
      document.getElementById("skills").style.display = "inline";  
      localStorage.setItem('logged', 'true');
      this.router.navigate(['messages']);
    }
    else{
      alert ("Usuario y/o Contraseña Incorrectas");  
    }
    
  }

  logout():void{
    document.getElementById("messages").style.display = "none"; 
    document.getElementById("skills").style.display = "none"; 
    localStorage.setItem('logged', 'false');
    this.router.navigate(['home']);
  }

}