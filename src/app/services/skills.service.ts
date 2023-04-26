import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http:HttpClient) { }

  getSoftskills(): Observable<any> {
    return this.http.get("assets/data/softskills.json");
  }

  getHardskills(): Observable<any> {
    return this.http.get("assets/data/hardskills.json");
  }

}
