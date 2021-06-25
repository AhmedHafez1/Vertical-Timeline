import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  todoUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  // Get all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {

    return this.http.put(`${this.todoUrl}/${todo.id}`, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo: Todo): Observable<any> {

    return this.http.delete<any>(`${this.todoUrl}/${todo.id}`, httpOptions);
  }
}