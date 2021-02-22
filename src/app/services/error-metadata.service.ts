import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMetadataService implements ErrorHandler {

  public handleError(error: any): void {
    const date = new Date();

    console.error({
      timestamp: date.toISOString(),
      message: error.message,
      zone: error.zone
    });
  }

}
