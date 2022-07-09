import { Component, OnInit,Input } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() skill: Skill;
  readMore: boolean;

  constructor() { }

  ngOnInit(): void {
    this.readMore = false;
  }

  reading():boolean{
    return this.readMore;
  }

  read():void{
    this.readMore = !this.readMore
  }
}
