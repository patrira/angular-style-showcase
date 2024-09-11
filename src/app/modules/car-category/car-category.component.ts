import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../../services/car.service';  // Import CarService and Car model

@Component({
  selector: 'app-car-category',
  templateUrl: './car-category.component.html',
  styleUrls: ['./car-category.component.scss']
})
export class CarCategoryComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCars();  // Fetch the car data from the service
  }
}
