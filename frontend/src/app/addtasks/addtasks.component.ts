import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent {
  tasks: any={}
  constructor(private todoService: TodoService){

  }

  addTask(tasks: any){
    alert("Task Added Successfully!")
    return this.todoService.addTask(tasks).subscribe(tasks)
  }
}
