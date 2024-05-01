import { Injectable } from '@angular/core';
import { Cita } from './Modelo/cita';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeCitas {
  private db: SQLiteObject | null = null;

  constructor(private sqlite: SQLite) {
    this.initDatabase();
  }

  private async initDatabase() {
    try {
      this.db = await this.sqlite.create({
        name: 'citas.db',
        location: 'default'
      });
      await this.createTable();
      console.log('Base de datos inicializada correctamente.');
    } catch (error) {
      console.error('Error al inicializar la base de datos:', error);
    }
  }

  private async createTable() {
    const query = 'CREATE TABLE IF NOT EXISTS citas (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, author TEXT)';
    await this.db?.executeSql(query, []);
    console.log('Tabla de citas creada correctamente.');
  }

  async getCitas(): Promise<Cita[]> {
    try {
      const result = await this.db?.executeSql('SELECT * FROM citas', []);
      const citas: Cita[] = [];
      if (result) {
        for (let i = 0; i < result.rows.length; i++) {
          citas.push(result.rows.item(i));
        }
      }
      return citas;
    } catch (error) {
      console.error('Error al obtener citas:', error);
      return [];
    }
  }

  async getRandomCita(): Promise<string> {
    try {
      const citas = await this.getCitas();
      if (citas.length > 0) {
        const randomIndex = Math.floor(Math.random() * citas.length);
        return `${citas[randomIndex].text} - ${citas[randomIndex].author}`;
      } else {
        return 'No hay citas disponibles';
      }
    } catch (error) {
      console.error('Error al obtener una cita aleatoria:', error);
      return 'Error al obtener una cita aleatoria';
    }
  }

  async addCita(frase: string, autor: string): Promise<void> {
    const query = 'INSERT INTO citas (text, author) VALUES (?, ?)';
    try {
      await this.db?.executeSql(query, [frase, autor]);
      console.log('Cita agregada correctamente.');
    } catch (error) {
      console.error('Error al agregar cita:', error);
    }
  }

  async deleteCita(id: number): Promise<void> {
    const query = 'DELETE FROM citas WHERE id = ?';
    try {
      await this.db?.executeSql(query, [id]);
      console.log('Cita eliminada correctamente.');
    } catch (error) {
      console.error('Error al eliminar cita:', error);
    }
  }
}
