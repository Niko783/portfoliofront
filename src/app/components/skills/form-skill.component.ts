import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Skill } from './skill';
import { SkillService } from './skill.service';


@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {

  skill:Skill = new Skill()
  titulo:string = "Registro nueva Habilidad"

  constructor(private skillService:SkillService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    console.log(this.skill);
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id'];
        if(id){
          this.skillService.get(id).subscribe(
            es=>this.skill=es
          );
        }
      }
    );
  }

  create():void{
    //console.log(this.usuario);
    this.skillService.create(this.skill).subscribe(
      res=>this.router.navigate(['/skills'])
    );
  }

  update():void{
    this.skillService.create(this.skill).subscribe(
      res=>this.router.navigate(['/skills'])
    );
  }

}

