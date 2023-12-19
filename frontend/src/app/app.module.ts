import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtasksComponent } from './addtasks/addtasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { EdittasksComponent } from './edittasks/edittasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtasksComponent,
    TasksComponent,
    EdittasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
