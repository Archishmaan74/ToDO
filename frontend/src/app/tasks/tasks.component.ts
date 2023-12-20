import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: any=[]
  constructor( private todoService : TodoService ){
    this.todoService.getTasks().subscribe((data)=>{
      this.tasks = data
    },(err)=>{
      console.log("Cannot fetch data...");
    })
  }

  deleteTask(tasks: any){
    this.todoService.deleteTask(tasks).subscribe(tasks)
    location.reload()
    alert("Task Deleted Successfully!")
  }

}
