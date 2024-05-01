import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginaDeConfiguracionModule } from './pagina-de-configuracion.component';

describe('PaginaDeConfiguracionComponent', () => {
  let component: PaginaDeConfiguracionModule;
  let fixture: ComponentFixture<PaginaDeConfiguracionModule>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PaginaDeConfiguracionModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaDeConfiguracionModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
