import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor(
    private http: HttpClient
  ) { }

  public get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  public getRemote(): Observable<string> {
    return this.http.get<string>('/mock/api/filter');
  }

  public setRemote(payload: string): Observable<string> {
    return this.http.put<string>('/mock/api/filter', payload);
  }
}
