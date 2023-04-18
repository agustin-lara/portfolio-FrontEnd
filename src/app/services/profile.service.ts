import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile():Observable<any> {
    return this.http.get(environment.apiUrl+"/api/personas/1");
  }

  updateProfile(profile:Profile):Observable<any> {
    return this.http.put<any>(environment.apiUrl+"/api/personas/editar/1",profile);
  }

}
