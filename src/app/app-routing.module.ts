import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: HomeComponent
  },  
  {
    path: 'home',
    component: HomeComponent
  },  
  {
    path: 'listaJuan',
    component: TaskListComponent
  },
  {
    path: 'contact',
    component: ConstructionComponent
  }, 
  {
    path: 'about',
    component: ConstructionComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
