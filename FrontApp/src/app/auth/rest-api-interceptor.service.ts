import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable()
export class RestApiInterceptorService implements HttpInterceptor {
    constructor(private cookieService: CookieService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cookieAUTH = this.cookieService.get('AUTH');
        if (cookieAUTH) {
            const objAUTH = JSON.parse(cookieAUTH);
            const clonedRequest = req.clone({ headers: req.headers.append('Authorization', `Bearer ${objAUTH.access_token}`) });
            return next.handle(clonedRequest);
        }
        return next.handle(req);
    }

}