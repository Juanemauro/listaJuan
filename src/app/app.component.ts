import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listaJuan';
  nombre = "Juan"


  tasks : string[] = ["aaa" ,"asdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdasdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdsasdasdssasdasdsasdasdsasdasdsasdasds"];  
  //tasks: string[] = [];

  // Add Task
  addTask(newTask: any) {
    this.tasks.unshift(newTask);
  }

  // Edit Task
  //editTask(task: any) {
   // console.log("la va a editar", (this.tasks.indexOf(task)));
   // this.tasks.indexOf((task), 1) = task;
   //this.tasks.unshift(newTask);
  //}


  // Delete Task
  deleteTask(task: any) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(this.tasks);
  }


}
