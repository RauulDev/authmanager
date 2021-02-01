import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfileMeService {

    constructor(private _http: HttpClient) { }

    getProfileMe() {
        return this._http.get(`${environment.apiUrl}/auth/me`);
    }

}