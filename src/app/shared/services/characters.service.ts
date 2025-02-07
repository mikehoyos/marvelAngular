import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private _httpClient:HttpClient) { }

  public getCharacters(){
    return this._httpClient.get<any>("http://localhost:8081/characters");
  }

  public getCharactersById(id:number, name:string){
    return this._httpClient.post<any>("http://localhost:8081/characterById",{id,name});
  }

  public updateBitacora(id:number){
    return this._httpClient.post<any>("http://localhost:8081/createBitacora",{id});
  }

  public getBitacora(){
    return this._httpClient.get<any>("http://localhost:8081/getBitacora");
  }
}
