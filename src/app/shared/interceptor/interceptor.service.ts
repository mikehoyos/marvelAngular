import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Itercerceptor MIKE");
    let request = req;
    request = request.clone({
      setHeaders:{
        "Access-Control-Allow-Origin": "*"
      }
    })
    return next.handle(request).pipe(
    catchError((err: HttpErrorResponse) => {
      console.log("MikeInter");
      return throwError(err);
    })
  )
  }
}
