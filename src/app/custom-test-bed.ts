import { Type } from '@angular/core';
import { ComponentFixture, TestBed, TestBedStatic, TestModuleMetadata } from '@angular/core/testing';
import { WebStorageService } from './services/web-storage.service';

export class CustomTestBed implements Partial<TestBed> {

  public static configureTestingModule(config: Partial<TestModuleMetadata>): TestBedStatic {
    const defaults: Partial<TestModuleMetadata> = {
      declarations: [],
      providers: [
        { provide: WebStorageService, useValue: jasmine.createSpyObj('WebStorageService', [ 'getRemote', 'setRemote' ]) }
      ]
    };

    return TestBed.configureTestingModule({
      declarations: Object.assign([], defaults.declarations, config.declarations),
      providers: Object.assign([], defaults.providers, config.providers)
    });
  }

  public static compileComponents(): Promise<any> {
    return TestBed.compileComponents();
  }

  public static createComponent<T>(component: Type<T>): ComponentFixture<T> {
    return TestBed.createComponent(component);
  }

}
