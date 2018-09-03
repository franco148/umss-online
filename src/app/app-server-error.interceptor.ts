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
                       console.log('AAAAAA thrown: ', event);
                        if (event instanceof HttpResponse) {
                            console.log('HANDLED EVENT....', event);
                            if (event.body && event.body.error === true && event.body.errorMessage) {
                                throw new Error(event.body.errorMessage);
                            } else {
                                this.snackBar.open('SUCCESS', 'INFO', { duration: 5000 });
                            }
                        }
                   }))
                   .pipe(catchError((exception) => {
                       console.log('CATCHED EXEPTION....', exception);
                       console.log('Status::::', exception.status, 'message::::::', exception.error.message);

                       if (exception.status === 404 && exception.error.message.includes('User does not exist')) {
                           const errorMessage = 'Invalid user or password.';
                           this.snackBar.open(errorMessage, 'ERROR', { duration: 5000 });
                           this.authService.authErrorChanged.next(errorMessage);
                       }
                       return EMPTY;
                   }));
    }
}
