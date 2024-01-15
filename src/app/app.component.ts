import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoomsComponent, RoomsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hotelinventory';

  role = 'Users';
}
