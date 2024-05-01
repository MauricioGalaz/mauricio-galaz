import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly CONFIG_KEY = 'appConfig';
  private config = {
    deleteCitasOnStart: false
  };

  constructor() {}

  async getConfig() {
    const { value } = await Storage['get']({ key: this.CONFIG_KEY });
    if (value) {
      this.config = JSON.parse(value);
    }
    return this.config;
  }

  async setConfig(config: { deleteCitasOnStart: boolean }) {
    this.config = config;
    await Storage['set']({ key: this.CONFIG_KEY, value: JSON.stringify(config) });
  }

  getDeleteOnStart() {
    return this.config.deleteCitasOnStart;
  }

  setDeleteOnStart(value: boolean) {
    this.config.deleteCitasOnStart = value;
  }
}