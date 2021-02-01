import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {
    constructor(private cookieService: CookieService) { }
    canActivate() {
        const cookieAUTH = this.cookieService.get('AUTH');
        if (!cookieAUTH) {
            return false;
        }
        return true;
    }
}