import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ErrorMetadataService implements ErrorHandler {

    public handleError(error: unknown): void {
        const date = new Date();

        console.error({
            timestamp: date.toISOString(),
            message: (error as { message: string }).message,
            zone: (error as { zone: unknown }).zone
        });
    }

}
