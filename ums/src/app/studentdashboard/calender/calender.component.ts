import { Component } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  selectedDate!: Date;

  onDateChange(event: any) {
    this.selectedDate = event.value;
    console.log(this.selectedDate); // Output the selected date to the console
  }
}
