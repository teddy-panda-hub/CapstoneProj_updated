import { Component, ViewChild } from '@angular/core';
import { AitutorComponent } from '../aitutor/aitutor.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isWindowVisible: boolean = false;

  toggleWindow(): void {
    this.isWindowVisible = !this.isWindowVisible;
  }
}
