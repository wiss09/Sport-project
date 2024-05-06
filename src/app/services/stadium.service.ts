import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
stadiumURL:string='http://localhost:3000/stadiums'
  constructor(private httpCLient:HttpClient) { }
getAllStadium(){
  return this.httpCLient.get<{stadiums:any}>(this.stadiumURL)
}
getStadiumById(id:any){
  return this.httpCLient.get<{stadium:any}>(`${this.stadiumURL}/${id}`)
}
deleteStadium(id:number){
  return this.httpCLient.get<{verified:string,  newTab:any}>(`${this.stadiumURL}/${id}`)
}
editStadium(object:any){
  return this.httpCLient.put<{verified:string}>(this.stadiumURL , object)
}
addStadium(object:any){
  return this.httpCLient.post<{verified:string }>(this.stadiumURL , object)
}
}
