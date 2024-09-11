import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    service = new CarService();
  });

  it('should return a list of cars', () => {
    const cars = service.getCars();
    expect(cars.length).toBe(12);  // There should be 12 cars in the list
  });

  it('should return the correct car by name', () => {
    const cars = service.getCars();
    const tesla = cars.find(car => car.name === 'Tesla Model S');
    expect(tesla?.name).toBe('Tesla Model S');
  });

  it('should have valid car properties', () => {
    const cars = service.getCars();
    cars.forEach(car => {
      expect(car.name).toBeDefined();
      expect(car.image).toBeDefined();
      expect(car.pricePerDay).toBeGreaterThan(0);
    });
  });
});
