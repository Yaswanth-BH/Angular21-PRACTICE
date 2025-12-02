import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalEx {
  courseName = signal('Angular 21');
  rollNo = signal(112);
  student = signal({ name: 'bear', city: 'pune' });
  cityList = signal(['nagpur', 'mumbai', 'thane', 'pune']);

  courseDuration: Signal<string> = signal('3 months');

  changeCourse() {
    this.courseName.set('React js');
  }

  constructor() {
    setTimeout(() => {
      this.courseName.set('React JS');
      console.log('Course name changed to ' + this.courseName());
    }, 5000);
  }
}
