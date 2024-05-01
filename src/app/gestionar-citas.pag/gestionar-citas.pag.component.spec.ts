import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GestionCitasPageModule } from '../gestion-de-citas/gestion-de-citas.page';



describe('GestionarCitasPagComponent', () => {
  let component: GestionCitasPageModule;
  let fixture: ComponentFixture<GestionCitasPageModule>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GestionCitasPageModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCitasPageModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
