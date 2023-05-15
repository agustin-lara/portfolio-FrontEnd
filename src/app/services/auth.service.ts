import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  
  ngOnInit(): void {

  }

  areCredentialsLoaded(): boolean {
    return (
      (localStorage.getItem("username") != undefined)
      && (localStorage.getItem("token") != undefined));
  }

  validateLogin() {
    let tokenRequest: Object = {
      "username": localStorage.getItem("username"),
      "token": localStorage.getItem("token")
    };
    return this.http.post(environment.apiUrl + "/api/auth/check", tokenRequest, {responseType: "text"}).pipe(
      tap(() => {
        this.loggedIn.next(true);
      })
    );
  }

  login(user: User) {
    return this.http.post(environment.apiUrl + "/api/auth/login", user, {responseType: "text"}).pipe(
      tap(() => {
        this.loggedIn.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    this.loggedIn.next(false);
    this.router.navigateByUrl("/login");
  }

}
