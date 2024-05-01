import { Component, OnInit } from '@angular/core';
import { ServicioDeCitas } from '../servicio-de-citas.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  standalone:true,
  imports: [ Router ]
})
export class HomePage implements OnInit {
  randomCita: string | undefined;

  constructor(private servicioDeCitas: ServicioDeCitas, private router: Router) {} // Inyecta Router

  ngOnInit(): void {
    this.getRandomCita();
  }

  getRandomCita(): void {
    this.servicioDeCitas.getRandomCita()
      .then((cita: string) => {
        this.randomCita = cita;
      })
      .catch((error: any) => {
        console.error('Error obteniendo la cita aleatoria:', error);
      });
  }

  // Agrega un método para navegar a la página de gestión de citas
  goToGestionCitas(): void {
    this.router.navigate(['/gestion-de-citas']);
  }

  // Agrega un método para navegar a la página de configuraciones
  goToConfiguracion(): void {
    this.router.navigate(['/configuracion']);
  }
}
