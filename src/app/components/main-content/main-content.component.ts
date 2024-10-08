import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../../services/car.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car | null = null;  

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  showCarDetails(car: Car): void {
    this.selectedCar = car;  
  }

  closeModal(): void {
    this.selectedCar = null;  
  }
}
