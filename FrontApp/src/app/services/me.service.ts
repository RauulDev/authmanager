import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProfileMeService {

    constructor(private _http: HttpClient) { }

    getProfileMe() {
        return this._http.get(`${environment.apiUrl}/users/me`);
    }

    getUsers() {
        return this._http.get(`${environment.apiUrl}/users`);
    }

    getUser(id) {
        return this._http.get(`${environment.apiUrl}/users/${id}`);
    }

    getPermissions() {
        return this._http.get(`${environment.apiUrl}/users/permissions`);
    }

    getRoles() {
        return this._http.get(`${environment.apiUrl}/roles`);
    }

    saveUser(user) {
        return this._http.post(`${environment.apiUrl}/users`, user);
    }

    deleteUser(id) {
        return this._http.delete(`${environment.apiUrl}/users/${id}`);
    }

    editUser(user) {
        return this._http.put(`${environment.apiUrl}/users`, user);
    }

}