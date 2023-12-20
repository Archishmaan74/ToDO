import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: "", component: TasksComponent
  },
  {
    path: "tasks", component: TasksComponent
  },
  {
    path: "tasks/:SNO", component: EditComponent
  },
  {
    path: "addtasks", component: AddtasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
