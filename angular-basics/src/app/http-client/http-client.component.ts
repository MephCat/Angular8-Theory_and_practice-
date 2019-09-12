import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {ToDo, TodosService} from './services/todos.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  todoTile: string;
  todos: ToDo[];
  loading = false;
  constructor(private todoServices: TodosService) { }

  ngOnInit() {
    this.fetchTodos();
  }
  addTodo(){
    if (!this.todoTile.trim()){
      return;
    }
    this.todoServices.addTodo({
      title: this.todoTile,
      completed: false
    }).subscribe( data => {
       this.todos.push(data);
       this.todoTile = '';
    });
  }

  fetchTodos() {
    this.loading = true;

    this.todoServices.fetchTodos()
      .subscribe(
      todos => {
        this.todos = todos;
        console.log(this.todos);
        this.loading = false;
        console.log(todos);
      },error => {
        console.log(error.message);
      }
    );

  }

  removeTodo(id: number) {
    this.todoServices.removeTodo(id).
    subscribe( data => {
        this.todos = this.todos.filter( t => t.id !== id);
    });
  }

  completeTodo(id: number ) {
    this.todoServices.completeTodo(id).subscribe(
      data => {
        console.log(data);
        this.todos.find( t => t.id === data.id).completed = true;
      }
    )
  }
}
