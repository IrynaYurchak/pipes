import { Component } from '@angular/core';
import { Lessons4Component } from './lessons4/lessons4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Lessons4Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }