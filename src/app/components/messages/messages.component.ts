import { Component, OnInit } from '@angular/core';
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessageComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.getAll().subscribe(
      m => this.messages = m
    );
  }

  

}
