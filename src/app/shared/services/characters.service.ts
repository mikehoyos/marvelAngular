import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _httpClient:HttpClient) { }

  public getCharacters(){
    return this._httpClient.get<any>("http://localhost:8083/characters");
  }

  public getCharactersById(id:number){
    return this._httpClient.post<any>("http://localhost:8083/characterById",{id});
  }
}
