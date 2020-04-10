// Angular
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

/**
 * More information there => https://medium.com/@MetonymyQT/angular-http-interceptors-what-are-they-and-how-to-use-them-52e060321088
 */
@Injectable()
export class InterceptService implements HttpInterceptor {
	// intercept request and add token
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {


		const setHeaders: { [name: string]: string | string[] } = {};

        if (!request.url.startsWith('api/')) {
            return next.handle(request);
        }

        if (!(request.body instanceof FormData)) {
            setHeaders['Content-Type'] = 'application/json';
        }

        // const accessToken = localStorage.getItem('accessToken');
        // if (accessToken) {
        //     setHeaders.Authorization = `Bearer ${accessToken}`;
        // }

        request = request.clone({
            url: `${environment.apiBaseUrl}/${request.url}`,
            setHeaders
        });

        return next.handle(request).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        // console.log('all looks good');
                        // http response status code
                        // console.log(event.status);
                    }
                },
                error => {
                    // http response status code
                    // console.log('----response----');
                    // console.error('status code:');
                    // tslint:disable-next-line:no-debugger
                    console.error(error.status);
                    console.error(error.message);
                    // console.log('--- end of response---');
                }
            )
        );
    }
}
// 		// tslint:disable-next-line:no-debugger
// 		// modify request
// 		// request = request.clone({
// 		// 	setHeaders: {
// 		// 		Authorization: `Bearer ${localStorage.getItem('accessToken')}`
// 		// 	}
// 		// });
// 		// console.log('----request----');
// 		// console.log(request);
// 		// console.log('--- end of request---');

// 		return next.handle(request).pipe(
// 			tap(
// 				event => {
// 					 if (event instanceof HttpResponse) {
// 						// console.log('all looks good');
// 						// http response status code
// 						// console.log(event.status);
// 					}
// 				},
// 				error => {
// 					// http response status code
// 					// console.log('----response----');
// 					// console.error('status code:');
// 					// tslint:disable-next-line:no-debugger
// 					//console.error(error.status);
// 					//console.error(error.message);
// 					// console.log('--- end of response---');
// 				}
// 			)
// 		);
// 	}
// }
