import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class JobsService {

    constructor(private _http: HttpClient) { }

    getJobs() {
        return this._http.get(`${environment.apiUrl}/jobs`);
    }

}