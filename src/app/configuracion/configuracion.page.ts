import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../servicioconfiguracion.service';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss']
})
export class ConfigPage implements OnInit {
  deleteOnStart: boolean = false;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.deleteOnStart = this.configService.getDeleteOnStart();
  }

  ionViewWillLeave(): void {
    this.configService.setDeleteOnStart(this.deleteOnStart);
  }
}
