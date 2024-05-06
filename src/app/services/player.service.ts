import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL:string='http://localhost:3000/players'
  constructor( private httpClient:HttpClient) { }
  getAllPlayer(){
  return this.httpClient.get<{ players: any }>(this.playerURL)
  }
  getPlayerById(id:number){
    return this.httpClient.get<{ player: any}>(`${this.playerURL}/${id}`)
  }
  deletePlayer(id:number){
 return this.httpClient.delete<{ isDeleted: boolean}>(`${this.playerURL}/${id}`)
  }
  addPlayer(object:any){
    return this.httpClient.post<{ verification:string}>(this.playerURL , object )
  }
  editPlayer(object:any){
 return this.httpClient.put<{isUpdated:boolean }>(this.playerURL , object)
  }
}


