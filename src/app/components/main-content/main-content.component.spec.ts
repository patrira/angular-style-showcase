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

  it('should create the main content component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of cars', () => {
    const compiled = fixture.nativeElement;
    const carCards = compiled.querySelectorAll('.car-card');
    expect(carCards.length).toBe(12);  
  });

  it('should display car details correctly', () => {
    const compiled = fixture.nativeElement;
    const carCard = compiled.querySelector('.car-card');
    const carName = carCard.querySelector('h2').textContent;
    const carPrice = carCard.querySelector('.price').textContent;

    expect(carName).toBeDefined(); 
    expect(carPrice).toContain('$');  
  });
});
