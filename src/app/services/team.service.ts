import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL:string='http://localhost:3000/teams'

  constructor(private httpClient:HttpClient) { }

  getAllTeam(){
    return this.httpClient.get<{ teams: any , players:any }>(this.teamURL)
    }
    getTeamById(id:any){
      return this.httpClient.get<{ team: any}>(`${this.teamURL}/${id}`)
    }
    deleteTeam(id:any){
   return this.httpClient.delete<{ isDeleted: boolean}>(`${this.teamURL}/${id}`)
    }
    addTeam(object:any){
      return this.httpClient.post<{ verification:string, new:any}>(this.teamURL , object )
    }
    editTeam(object:any){
   return this.httpClient.put<{isUpdated:boolean }>(this.teamURL , object)
    }
}
