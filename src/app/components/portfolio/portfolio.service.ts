import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {}

  getData(path: string):Observable<object|object[]> {
    return this.http.get<object|object[]>(path);
  }

  getExperience() : Observable<any> {
    return this.http.get("assets/data/experience.json");
  }
  
}
