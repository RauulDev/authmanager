import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

    constructor(private _http: HttpClient) { }

    login(loginName: string, password: string) {
        return this._http.post(`${environment.apiUrl}/auth/login`, { loginName, password });
    }

}