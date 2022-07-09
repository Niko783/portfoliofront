import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../messages/message';
import { MessageService } from '../messages/message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mje:Message = new Message();
  /*nombre:string="";
  correo:string="";
  asunto:string="";
  mensaje:string="";*/

  constructor(private messageService:MessageService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  enviar():void{
    //console.log(this.usuario);
    this.messageService.create(this.mje).subscribe(
      res=>this.router.navigate(['/messages'])
    );
  }
  
  update():void{
    this.messageService.create(this.mje).subscribe(
      res=>this.router.navigate(['/messages'])
    );
  }
  
  cargar():void{
    //console.log("");//this.mje);
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.messageService.get(id).subscribe(
            es=>this.mje=es
          );
        }
      }
    );
  }
}