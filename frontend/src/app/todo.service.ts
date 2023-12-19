import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private httpClient: HttpClient){

  }

  getTasks(){
    return this.httpClient.get("http://localhost:3000/display")
  }
}
