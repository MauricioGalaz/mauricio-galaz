import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaginaDeConfiguracionModule } from '../pagina-de-configuracion/pagina-de-configuracion.component';

@NgModule({
  declarations: [PaginaDeConfiguracionModule],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [PaginaDeConfiguracionModule]
})
export class ConfiguracionModule {}