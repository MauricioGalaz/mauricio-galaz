import { ServicioDeCitas } from '../servicio-de-citas.service';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importa Router para la navegación
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-gestion-de-citas',
  templateUrl: './gestion-de-citas.page.html', 
  styleUrls: ['./gestion-de-citas.page.scss'],
  standalone: true,
  imports: [ IonicModule, CommonModule, FormsModule, Router, NgModule]
})
export class GestionCitasPageModule implements OnInit {

  citas: any[] | undefined;

  constructor(private servicioDeCitas: ServicioDeCitas) { }

  ngOnInit() {
    this.loadCitas();
  }

  loadCitas() {
    this.servicioDeCitas.getCitas().then(citas => {
      this.citas = citas;
    });
  }

  addCita(frase: string, autor: string) {
    this.servicioDeCitas.addCita(frase, autor).then(() => {
      this.loadCitas();
    });
  }

  deleteCita(id: number) {
    this.servicioDeCitas.deleteCita(id).then(() => {
      this.loadCitas();
    });
  }
}


