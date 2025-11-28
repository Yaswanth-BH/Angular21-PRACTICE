import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName = 'Angular v-21 Complete Course';
  cityName = 'Nagpur';

  className = 'primary';
  inputType = 'date';

  showWelcomeMessage() {
    alert('Welcome to Angular 21');
  }
  onStateChange() {
    alert('State changed');
  }
  changeCourseName(text: string) {
    this.courseName = text;
  }
}
