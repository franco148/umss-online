import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable, EMPTY } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';


import { MatSnackBar } from '@angular/material';

import { NUMBER_OF_RETRIES } from './constants/app.constant';
import { AuthService } from './components/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AppServerErrorInterceptor implements HttpInterceptor {

    constructor(private snackBar: MatSnackBar, private authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(retry(NUMBER_OF_RETRIES))
                   .pipe(tap(event => {
                        if (event instanceof HttpResponse) {
                            if (event.body && event.body.error === true && event.body.errorMessage) {
                                throw new Error(event.body.errorMessage);
                            } else {
                                this.snackBar.open('SUCCESS', 'INFO', { duration: 5000 });
                            }
                        }
                   }))
                   .pipe(catchError((exception) => {
                       console.log('CATCHED EXEPTION....', exception);
                       if (exception.status === 404 && exception.error.message.includes('User does not exist')) {
                           const errorMessage = 'Invalid user or password.';
                           this.snackBar.open(errorMessage, 'ERROR', { duration: 5000 });
                           this.authService.authErrorChanged.next(errorMessage);
                       } else if (exception.status === 400) {
                           // exception.error.message.includes('Validations')
                           this.snackBar.open(exception.error.message, 'ERROR', { duration: 5000 });
                           this.authService.authErrorChanged.next(exception.error.message);
                       }
                       return EMPTY;
                   }));
    }
}
