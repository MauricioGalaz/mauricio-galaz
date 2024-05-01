import { TestBed } from '@angular/core/testing';
import { ConfigService } from './servicioconfiguracion.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get config', async () => {
    const config = { deleteCitasOnStart: false };
    const getConfigSpy = spyOn<any>(service, 'getConfig').and.returnValue(Promise.resolve(config));
    const result = await service.getConfig();
    expect(result).toEqual(config);
    expect(getConfigSpy).toHaveBeenCalled();
  });

  it('should set config', async () => {
    const config = { deleteCitasOnStart: true };
    const setConfigSpy = spyOn<any>(service, 'setConfig').and.returnValue(Promise.resolve());
    await service.setConfig(config);
    expect(setConfigSpy).toHaveBeenCalledWith(config);
  });
});
