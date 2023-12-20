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

  getPartTask(sno: any){
    return this.httpClient.get("http://localhost:3000/displayone")
  }

  addTask(task: any){
    return this.httpClient.post("http://localhost:3000/add",task)
  }

  editTask(task: any){
    return this.httpClient.post("http://localhost:3000/edit",task)
  }
}
