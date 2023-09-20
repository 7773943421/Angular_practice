import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';
//import { error } from 'console';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
list:any[]=[];
todoList:any=[];
  constructor(private todo:TodoService) { }

  ngOnInit() {
  }
  createTodo() {
    let todo = {
      id : new Date().getTime(),
      title: `Pawan mustika`
    }
    this.todo.create(todo).subscribe(res => {
      console.log('todo create', res);
    })
  }

  getTodos(){
    this.todo.list().subscribe((res)=>{
      this.todoList=res;
      console.log('get todo list',this.todoList); 
    },error => {
      console.log('errore occured');
    }) 
  }

  editTodo(todo:any){
    let data={
      id:new Date().getTime(),
      title:'edited todo'
    }
    this.todo.update(todo.id,data).subscribe((res)=>{
this.getTodos();
    },err=>{
    console.log('Error occured');
    })
  }


deleteTodo(id:any)  {
  this.todo.delete(id).subscribe((res)=>{
  },(error =>{
    console.log('Error occure',error); 
  }))
}
}


