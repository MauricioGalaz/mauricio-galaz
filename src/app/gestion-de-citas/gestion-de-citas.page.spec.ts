import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { Cita } from '../Modelo/cita';
import { GestionCitasPageModule } from './gestion-de-citas.page';



describe('GestionDeCitasPage', () => {
  let component: GestionCitasPageModule;
  let fixture: ComponentFixture<GestionCitasPageModule>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCitasPageModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCitasPageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
