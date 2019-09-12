import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

export interface ToDo {
  completed: boolean,
  title: string,
  id?: number,
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor( private http: HttpClient) { }

  addTodo(todo: ToDo): Observable<ToDo> {
    const headers = new HttpHeaders({
      'MyCustomHeader': Math.random().toString()
    });
    return this.http.post<ToDo>('htttp://jsonplaceholder.typecode.com/todos', todo, {
      headers});
  }
  fetchTodos() {
    let params = new HttpParams();
    params = params.append('_limit', '4');
    params = params.append('custom', 'anything');
    return this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos',
      {
        params,
        observe: 'response'} )
      .pipe(
        map(response => {
          console.log('response', response);
          return response.body;
        }),
        delay(500),
        catchError( error => {
          console.log(error.message);
          return throwError(error);
        })
      );
  }
  removeTodo(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        console.log('Event', event);
        if (event.type === HttpEventType.Sent) {
          console.log('Sent', event);
        }
        if (event.type === HttpEventType.Response) {
          console.log('res', event);
        }
      })
    );
  }
  completeTodo(id: number): Observable<any> {
    return this.http.put<ToDo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
       competed: true
    }, {
      responseType: 'json'
    });
  }
  getPost(id) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
