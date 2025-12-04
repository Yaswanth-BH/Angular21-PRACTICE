import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeAvl: boolean = false;
  studentTotalMarks: number = 0;

  isSuccessDivVisible: WritableSignal<boolean> = signal(false);

  offerList: string[] = [
    '20% off for PayTm',
    '10% off for Gpay',
    '15% off for ICCI credit card',
    '25% off for online banking',
  ];

  productCategoryList: string[] = ['Mobile', 'laptop', 'Camera', 'Headphones', 'Mouse', 'Keyboard'];

  employeeList = [
    { name: 'A', city: 'Pune', isActive: false },
    { name: 'B', city: 'Mumubai', isActive: true },
    { name: 'C', city: 'Thane', isActive: false },
    { name: 'D', city: 'Pune', isActive: true },
    { name: 'E', city: 'Thane', isActive: true },
    { name: 'F', city: 'Nagpur', isActive: false },
    { name: 'G', city: 'Pune', isActive: false },
    { name: 'H', city: 'Mumbai', isActive: true },
  ];

  toggleDivVisiblity() {
    this.isSuccessDivVisible.set(!this.isSuccessDivVisible());
  }
}
