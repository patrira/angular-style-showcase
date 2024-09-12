import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Renderer2 } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let renderer2: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [Renderer2]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    renderer2 = fixture.componentRef.injector.get(Renderer2);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle theme from light to dark', () => {
    const removeClassSpy = jest.spyOn(renderer2, 'removeClass');
    const addClassSpy = jest.spyOn(renderer2, 'addClass');

    component.currentTheme = 'theme-light';
    component.toggleTheme();

    expect(component.currentTheme).toBe('theme-dark');
    expect(removeClassSpy).toHaveBeenCalledWith(document.body, 'theme-light');
    expect(addClassSpy).toHaveBeenCalledWith(document.body, 'theme-dark');
  });

  it('should toggle theme from dark to light', () => {
    const removeClassSpy = jest.spyOn(renderer2, 'removeClass');
    const addClassSpy = jest.spyOn(renderer2, 'addClass');

    component.currentTheme = 'theme-dark';
    component.toggleTheme();

    expect(component.currentTheme).toBe('theme-light');
    expect(removeClassSpy).toHaveBeenCalledWith(document.body, 'theme-dark');
    expect(addClassSpy).toHaveBeenCalledWith(document.body, 'theme-light');
  });
});
