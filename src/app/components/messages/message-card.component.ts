import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../messages/message';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {

  @Input() mensaje: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  delete(mensaje: Message): void {
    console.log("Delete message " + mensaje.id) ;
    this.messageService.delete(mensaje.id).subscribe(
     response => this.mensaje = response
    );
  }

}