import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Child } from './child/child';
// import { ChildExtra } from './child-extra/child-extra';
@Component({
  imports: [FormsModule, Child],
  selector: 'app-lesson03',
  styleUrl: './lesson03.scss',
  templateUrl: './lesson03.html',
})
export class Lesson03 {
  
}