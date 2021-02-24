import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  public get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
}
