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
      image: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/af39ffb7-33a5-4cc8-8a96-529b63ff6e7b/bvlatuR/std/1920x1080/lhd-model-s',
      description: 'Experience luxury and performance with this electric car.',
      pricePerDay: 120
    },
    {
      id: 2,
      name: 'Ford Mustang GT',
      image: 'https://cdn.motor1.com/images/mgl/0ANZz/s3/2020-ford-mustang-shelby-gt500.jpg',
      description: 'An iconic American muscle car with incredible power.',
      pricePerDay: 150
    },
    {
      id: 3,
      name: 'BMW 5 Series',
      image: 'https://cdn.bmwblog.com/wp-content/uploads/2020/05/2021-bmw-5-series-lci-facelift-02.jpg',
      description: 'Sleek and refined, the BMW 5 Series offers comfort and style.',
      pricePerDay: 140
    },
    {
      id: 4,
      name: 'Audi A6',
      image: 'https://cdn.motor1.com/images/mgl/mOOVx/s3/audi-a6.jpg',
      description: 'Luxury and technology combined in a powerful package.',
      pricePerDay: 130
    },
    {
      id: 5,
      name: 'Mercedes-Benz E-Class',
      image: 'https://cdn.motor1.com/images/mgl/xv8Lx/s3/2021-mercedes-benz-e-class.jpg',
      description: 'A blend of performance, luxury, and technology.',
      pricePerDay: 160
    },
    {
      id: 6,
      name: 'Chevrolet Camaro',
      image: 'https://cdn.motor1.com/images/mgl/kz1L3/s3/2021-chevrolet-camaro-ss.jpg',
      description: 'A modern classic, with bold design and power to match.',
      pricePerDay: 130
    },
    {
      id: 7,
      name: 'Porsche 911',
      image: 'https://cdn.motor1.com/images/mgl/v9LNx/s3/2020-porsche-911.jpg',
      description: 'Timeless design and unrivaled performance in one package.',
      pricePerDay: 250
    },
    {
      id: 8,
      name: 'Jeep Wrangler',
      image: 'https://cdn.motor1.com/images/mgl/BZoJw/s3/2021-jeep-wrangler-rubicon-392.jpg',
      description: 'Off-road capability meets everyday practicality.',
      pricePerDay: 110
    },
    {
      id: 9,
      name: 'Toyota Camry',
      image: 'https://cdn.motor1.com/images/mgl/OrlLZ/s3/2021-toyota-camry-xse.jpg',
      description: 'Reliable, efficient, and full of modern features.',
      pricePerDay: 90
    },
    {
      id: 10,
      name: 'Honda Civic',
      image: 'https://cdn.motor1.com/images/mgl/MoBNK/s3/2021-honda-civic.jpg',
      description: 'Compact yet powerful, perfect for city drives.',
      pricePerDay: 80
    },
    {
      id: 11,
      name: 'Range Rover Evoque',
      image: 'https://cdn.motor1.com/images/mgl/6Rx1M/s3/2021-range-rover-evoque.jpg',
      description: 'Luxury SUV with unparalleled off-road capabilities.',
      pricePerDay: 170
    },
    {
      id: 12,
      name: 'Nissan GT-R',
      image: 'https://cdn.motor1.com/images/mgl/lxzJZ/s3/2021-nissan-gt-r.jpg',
      description: 'Legendary performance meets modern innovation.',
      pricePerDay: 220
    }
  ];

  getCars(): Car[] {
    return this.cars;
  }
}

