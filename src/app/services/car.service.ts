import { Injectable } from '@angular/core';

export interface Car {
  id: number;
  name: string;
  image: string;
  description: string;
  pricePerDay: number;
}


@Injectable({
  providedIn: 'root'
})


export class CarService {

  // constructor() { }

  cars: Car[] = [
    {
      id: 1,
      name: 'Tesla Model S',
      image: 'assets/images/car1.jpg',  
      description: 'Experience luxury and performance with this electric car.',
      pricePerDay: 120
    },
    {
      id: 2,
      name: 'Ford Mustang GT',
      image: 'assets/images/car2.jpg',  
      description: 'An iconic American muscle car with incredible power.',
      pricePerDay: 150
    },
    {
      id: 3,
      name: 'BMW 5 Series',
      image: 'assets/images/car3.jpg',  
      description: 'Sleek and refined, the BMW 5 Series offers comfort and style.',
      pricePerDay: 140
    },
    {
      id: 4,
      name: 'Audi A6',
      image: 'assets/images/car4.jpg',  
      description: 'Luxury and technology combined in a powerful package.',
      pricePerDay: 130
    },
    {
      id: 5,
      name: 'Mercedes-Benz E-Class',
      image: 'assets/images/car5.jpg',  
      description: 'A blend of performance, luxury, and technology.',
      pricePerDay: 160
    },
    {
      id: 6,
      name: 'Chevrolet Camaro',
      image: 'assets/images/car6.jpg',  
      description: 'A modern classic, with bold design and power to match.',
      pricePerDay: 130
    },
    {
      id: 7,
      name: 'Porsche 911',
      image: 'assets/images/car7.jpg',  
      description: 'Timeless design and unrivaled performance in one package.',
      pricePerDay: 250
    },
    {
      id: 8,
      name: 'Jeep Wrangler',
      image: 'assets/images/car8.jpg',  
      description: 'Off-road capability meets everyday practicality.',
      pricePerDay: 110
    },
    {
      id: 9,
      name: 'Toyota Camry',
      image: 'assets/images/car9.jpg',  
      description: 'Reliable, efficient, and full of modern features.',
      pricePerDay: 90
    },
    {
      id: 10,
      name: 'Honda Civic',
      image: 'assets/images/car10.jpg',  
      description: 'Compact yet powerful, perfect for city drives.',
      pricePerDay: 80
    },
    {
      id: 11,
      name: 'Range Rover Evoque',
      image: 'assets/images/car11.jpg',  
      description: 'Luxury SUV with unparalleled off-road capabilities.',
      pricePerDay: 170
    },
    {
      id: 12,
      name: 'Nissan GT-R',
      image: './assets/images/car12.jpg', 
      description: 'Legendary performance meets modern innovation.',
      pricePerDay: 220
    }
  ];

  getCars(): Car[] {
    return this.cars;
  }
}


