import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/Iuser';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

   API_URL="http://localhost:3000/api/user";

   registerUser(obj:Iuser):Observable<string>{
    return this.http.post<string>(`${this.API_URL}/new-user`,obj);
   }
   loginUser(obj:{}):Observable<any>{
    return this.http.post<Iuser>(`${this.API_URL}/login`,obj,{withCredentials:true});
   }
   logoutUser():Observable<any>{
    return this.http.post<any>(`${this.API_URL}/logout`,{},{withCredentials:true})
   }
   isAuthenticated(): boolean {
      return !!localStorage.getItem("jwt");

  }
}
