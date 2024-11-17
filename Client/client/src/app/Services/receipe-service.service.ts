import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceipeServiceService {

   API_URL="http://localhost:3000/api/recipe";
  constructor(private http:HttpClient) { }
  token = localStorage.getItem('jwtToken');

  headers = this.token ? new HttpHeaders().set('Authorization', `Bearer ${this.token}`) : undefined;
  createRecipe(form:any):Observable<any>{

    return this.http.post<any>(`${this.API_URL}/create-recipe`,form,{withCredentials:true ,headers:this.headers})
  }
  getRecipsUser():Observable<any>{
    return this.http.get<any>(`${this.API_URL}/list-recipe`,{withCredentials:true,headers:this.headers})
  }
  deleteRecipe(id:string):Observable<any>{
    return this.http.delete<any>(`${this.API_URL}/recipe/${id}`,{withCredentials:true,headers:this.headers})
  }
   getOneRecipe(id:string):Observable<any>{
    return this.http.get<any>(`${this.API_URL}/recipe/${id}`,{withCredentials:true,headers:this.headers})
  }
  getAllRecipe():Observable<any>{
    return this.http.get(`${this.API_URL}/all-recipes`,{withCredentials:true,headers:this.headers})
  }
}
