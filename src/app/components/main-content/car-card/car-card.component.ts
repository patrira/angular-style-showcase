import { Component, Input } from '@angular/core';
import { Car } from '../../../services/car.service';  

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent {
  @Input() car!: Car;  
}
