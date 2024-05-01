import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigService } from '../servicioconfiguracion.service';

describe('ConfigPage', () => {
  let component: ConfigService;
  let fixture: ComponentFixture<ConfigService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigService ],
      providers: [ ConfigService ] // Asegúrate de proporcionar el servicio
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
