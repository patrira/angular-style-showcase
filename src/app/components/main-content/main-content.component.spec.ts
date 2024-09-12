import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContentComponent } from './main-content.component';
import { CarService } from '../../services/car.service';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;
  let carService: CarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContentComponent],
      providers: [CarService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;

    
    carService = TestBed.inject(CarService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of cars', () => {
    const cars = carService.getCars();  
    expect(cars.length).toBeGreaterThan(0);  
  });

  it('should show car details when clicked', () => {
    const car = carService.getCars()[0];  
    component.showCarDetails(car);
    expect(component.selectedCar).toBe(car);  
  });

  it('should close modal on closeModal()', () => {
    component.selectedCar = carService.getCars()[0];  
    component.closeModal();
    expect(component.selectedCar).toBeNull();  
  });
});
