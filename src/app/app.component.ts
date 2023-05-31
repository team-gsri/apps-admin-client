import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { JoueursListComponent } from './joueurs/joueurs-list/joueurs-list.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    JoueursListComponent,
    MessagesComponent,
  ],
  selector: 'gsri-admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GSRI Administration';
}
