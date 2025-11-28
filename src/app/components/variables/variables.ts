import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  //var courseName = "Angular 21"
  // string || number || boolean || date
  courseName: string = 'Angular 21';
  currentVersion = 'v.21';

  rollNo: number = 121;
  productPrice = 1200.5;

  isActive: boolean = false;
  isPresent: boolean = true;

  currentDate: Date = new Date();

  cityList: string[] = ['Pune', 'Mumbai', 'Jaipuar'];
  rollNoArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  studentObj = {
    name: 'Bear',
    mobile: '9876543210',
    email: 'bear@gmail.com',
  };

  studentlist = [
    { name: 'a', city: 'Pune' },
    { name: 'b', city: 'Mumbai' },
    { name: 'c', city: 'Jaipur' },
  ];

  constructor() {
    this.courseName = '2233';
    this.rollNo = 234;
  }
}
