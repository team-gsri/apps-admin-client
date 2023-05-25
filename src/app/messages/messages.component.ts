import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';

@Component({
  selector: 'gsri-admin-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {

  constructor(public messageService: MessageService) { }

}
