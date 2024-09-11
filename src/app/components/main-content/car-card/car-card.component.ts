import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../../services/car.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() car!: Car;
  @Output() closeModal = new EventEmitter<void>();  // Emit an event to close the modal

  closeModalWindow(): void {
    this.closeModal.emit();  // Emit the close event
  }
}
