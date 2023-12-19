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
    path: "addtasks", component: AddtasksComponent
  },
  {
    path: "edittasks", component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
