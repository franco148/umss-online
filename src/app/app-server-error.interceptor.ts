import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';

import { Observable, EMPTY } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';


import { MatSnackBar } from '@angular/material';

import { NUMBER_OF_RETRIES } from './constants/app.constant';
import { duration } from 'moment';

@Injectable({
    providedIn: 'root'
})
export class AppServerErrorInterceptor implements HttpInterceptor {

    constructor(private snackBar: MatSnackBar) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(retry(NUMBER_OF_RETRIES))
                   .pipe(tap(event => {
                        if (event instanceof HttpResponse) {
                            if (event.body && event.body.error === true && event.body.errorMessage) {
                                throw new Error(event.body.errorMessage);
                            } else {
                                console.log(event);
                                this.snackBar.open('SUCCESS', 'INFO', { duration: 5000 });
                            }
                        }
                   }))
                   .pipe(catchError((exception) => {
                       console.log(exception);

                       return EMPTY;
                   }));
    }
}
