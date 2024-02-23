import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import 'cubing/twisty';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppComponent {
  title = 'cubing-issue';
}
