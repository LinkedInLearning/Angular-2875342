import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListInterceptorService implements HttpInterceptor {
  private readonly API_URL = '/mock/api/filter';
  private readonly STORAGE_KEY = 'MOCK_API_FILTER';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<string>> {

    if (request.url === this.API_URL && request.method === 'GET') {
      return this.getFilter();
    }

    if (request.url === this.API_URL && request.method === 'PUT') {
      return this.setFilter(request.body);
    }

    return next.handle(request);
  }

  private getFilter(): Observable<HttpResponse<string>> {
    return new Observable(observer => {
      observer.next(new HttpResponse<string>({
        status: 200,
        body: window.localStorage.getItem(this.STORAGE_KEY)
      }));

      observer.complete();
    });
  }

  private setFilter(filter: string): Observable<HttpResponse<string>> {
    window.localStorage.setItem(this.STORAGE_KEY, filter);
    return this.getFilter();
  }

}
