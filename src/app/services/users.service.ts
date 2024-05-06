import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userURL:string='http://localhost:3000/users';
  constructor( private httpClient : HttpClient) { }
  signup(object:any , photo:File){
    let formData= new FormData();
    
    formData.append("img",photo);
    formData.append("firstName" , object.firstName);
    formData.append("lastName", object.lastName);
    formData.append("email" , object.email);
    formData.append('password',object.password);
    formData.append('role' , object.role) ;
    formData.append('confirm' , object.confirm) ;
     return this.httpClient.post<{msg:string}>(this.userURL+'/signup' , formData);
   }

  login(object:any){
    return this.httpClient.post<{msg:string, token:string}>(this.userURL+'/login', object); 
  } 
}
