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

  constructor() { }

  cars: Car[] = [
    {
      id: 1,
      name: 'Tesla Model S',
      image: '',
      description: 'Experience luxury and performance with this electric car.',
      pricePerDay: 120
    },
    {
      id: 2,
      name: 'Ford Mustang GT',
      image: '',
      description: 'An iconic American muscle car with incredible power.',
      pricePerDay: 150
    },
    {
      id: 3,
      name: 'BMW 5 Series',
      image: '',
      description: 'Sleek and refined, the BMW 5 Series offers comfort and style.',
      pricePerDay: 140
    },
    {
      id: 4,
      name: 'Audi A6',
      image: '',
      description: 'Luxury and technology combined in a powerful package.',
      pricePerDay: 130
    },
    {
      id: 5,
      name: 'Mercedes-Benz E-Class',
      image: '',
      description: 'A blend of performance, luxury, and technology.',
      pricePerDay: 160
    },
    {
      id: 6,
      name: 'Chevrolet Camaro',
      image: '',
      description: 'A modern classic, with bold design and power to match.',
      pricePerDay: 130
    },
    {
      id: 7,
      name: 'Porsche 911',
      image: '',
      description: 'Timeless design and unrivaled performance in one package.',
      pricePerDay: 250
    },
    {
      id: 8,
      name: 'Jeep Wrangler',
      image: '',
      description: 'Off-road capability meets everyday practicality.',
      pricePerDay: 110
    },
    {
      id: 9,
      name: 'Toyota Camry',
      image: '',
      description: 'Reliable, efficient, and full of modern features.',
      pricePerDay: 90
    },
    {
      id: 10,
      name: 'Honda Civic',
      image: '',
      description: 'Compact yet powerful, perfect for city drives.',
      pricePerDay: 80
    },
    {
      id: 11,
      name: 'Range Rover Evoque',
      image: '',
      description: 'Luxury SUV with unparalleled off-road capabilities.',
      pricePerDay: 170
    },
    {
      id: 12,
      name: 'Nissan GT-R',
      image: '',
      description: 'Legendary performance meets modern innovation.',
      pricePerDay: 220
    }
  ];

  getCars(): Car[] {
    return this.cars;
  }
}

