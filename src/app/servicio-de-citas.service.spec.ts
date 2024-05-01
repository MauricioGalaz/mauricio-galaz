import { TestBed } from '@angular/core/testing';
import { ServicioDeCitas } from './servicio-de-citas.service';
import { Cita } from './Modelo/cita';

describe('ServicioDeCitas', () => {
  let service: ServicioDeCitas;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioDeCitas]
    });
    service = TestBed.inject(ServicioDeCitas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get quotes', async () => { 
    const cita: Cita[] = [
      { text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', author: 'John Lennon' },
      { text: 'Haz el amor y no la guerra.', author: 'John Lennon' }
    ];
    const citas = await service.getCitas(); 
  });

  it('should get a random cita', async () => { 
    const randomCita = await service.getRandomCita(); 
    expect(randomCita).toContain('-');
  });

  it('should delete a cita', async () => { 
    const citaToDelete: Cita = { text: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', author: 'John Lennon' };
    await service.deleteCita; 
    const citas = await service.getCitas(); 
    expect(citas).not.toContain(citaToDelete);
  });
});
