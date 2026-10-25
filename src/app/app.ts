import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lesson03 } from './lesson03/lesson03'

@Component({
  imports: [RouterOutlet,Lesson03],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lesson3');
}
