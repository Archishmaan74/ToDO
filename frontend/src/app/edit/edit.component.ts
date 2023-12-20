import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  tasks: any
  constructor(private aRoute : ActivatedRoute ,private todoService : TodoService){
    aRoute.params.subscribe((data)=>{
      this.todoService.getPartTask(data['SNO']).subscribe((data) =>{
        this.tasks = data
      })
    })
  }
}
