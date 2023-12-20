import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  clickedSno: any
  tasks: any
  constructor(private aRoute : ActivatedRoute ,private todoService : TodoService){
    aRoute.params.subscribe((data)=>{
      this.clickedSno = data['SNO']
      this.tasks = this.todoService.getPartTask(this.clickedSno)
    })
  }
}
