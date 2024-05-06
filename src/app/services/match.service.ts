import { HttpClient } from '@angular/common/http'; //importé le Module manuallement
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL: string = 'http://localhost:3000/matches';
  constructor(private httpClient: HttpClient) { } // instance du variable de type prédefinie (livreur)
  // return matches array from backend :3000
  //requete 1
  getAllMatches() {
    return this.httpClient.get<{ matches: any }>(this.matchURL)
  }
  // return one match from backend:3000
  //requete 2 
  getMatchById(id: number) {
    return this.httpClient.get<{ objt: any}>(`${this.matchURL}/${id}`)
  }
  //requete 3
  // return msg (string) like : your item was delete
  deleteMatchById(id: number) {
    return this.httpClient.delete<{ isDeleted: boolean }>(`${this.matchURL}/${id}`)
  }
  // requete 4 
  //return msg (string) like your object was saved 
  addMatch(object: any) {
    return this.httpClient.post<{ verification: any, new: any}>(this.matchURL, object)
  }
  // requete 5
  //return msg(string) like your data was updated
  editMatch(object: any) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.matchURL, object)
  }
  searchMatch(object:any){
return this.httpClient.post<{matches:any}>(`${this.matchURL}/search` , object)
  }
}

