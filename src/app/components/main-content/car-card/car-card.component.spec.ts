import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarCardComponent } from './car-card.component';
import { Car } from '../../../services/car.service';
import { By } from '@angular/platform-browser';

describe('CarCardComponent', () => {
  let component: CarCardComponent;
  let fixture: ComponentFixture<CarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closeModal event when closeModalWindow is called', () => {
    const closeModalSpy = jest.spyOn(component.closeModal, 'emit');

    component.closeModalWindow();

    expect(closeModalSpy).toHaveBeenCalled();
  });

  it('should display car details', () => {
    const carElement = fixture.debugElement.query(By.css('.car-details'));
    expect(carElement.nativeElement.textContent).toContain('Toyota');
    expect(carElement.nativeElement.textContent).toContain('Corolla');
    expect(carElement.nativeElement.textContent).toContain('2020');
  });
});
