import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HttpErrorHandlingService {
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // Client error
          console.log('Client error.');
          console.error(error);
        } else {
          // Server error
          console.log('Server error.');
          switch (error.status) {
            case 401: // Unauthorized
            case 403:
              // TODO: action to implement when the token has expired
              // this.router.navigate(['login']);
              break;
          }
        }
        return new ErrorObservable(error);
    }
}
