import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';
import { SkillService } from './skill.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.skillService.getAll().subscribe(
      s => this.skills = s
    );
  }

  delete(skills: Skill): void {
    console.log("Delete skill " + skills.id) ;
    this.skillService.delete(skills.id).subscribe(
      res => this.skillService.getAll().subscribe(
        response => this.skills = response
      )
    );
  }

}
