import { Component } from '@angular/core';
import { ServicioDeCitas } from '../servicio-de-citas.service';
import { Cita } from '../Modelo/cita';

@Component({
  selector: 'app-gestionar-citas.pag',
  templateUrl: './gestionar-citas.pag.component.html',
  styleUrls: ['./gestionar-citas.pag.component.css']
})
export class IngresarCitaComponent {
  nuevaCita: Cita = { text: '', author: '' };

  constructor(private servicioDeCitas: ServicioDeCitas) {}

  agregarCita(): void {
    this.servicioDeCitas.addCita(this.nuevaCita.text, this.nuevaCita.author)
      .then(() => {
        this.nuevaCita = { text: '', author: '' };
      })
      .catch(error => {
        console.error('Error al agregar la cita:', error);
      });
  }
}
