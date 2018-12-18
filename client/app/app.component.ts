import { Component } from '@angular/core';
import {QuizService} from './services/quiz.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[QuizService]
})

export class AppComponent { }
