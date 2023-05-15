import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(environment.apiUrl + "/api/perfil");
  }

  addProfile(profile: Profile) {
    return this.http.post(environment.apiUrl + "/api/perfil", profile, {responseType: 'text'});
  }

  updateProfile(profile: Profile) {
    return this.http.put(environment.apiUrl + "/api/perfil", profile, {responseType: 'text'});
  }

  deleteProfile() {
    return this.http.delete(environment.apiUrl + "/api/perfil", {responseType: 'text'});
  }

}
