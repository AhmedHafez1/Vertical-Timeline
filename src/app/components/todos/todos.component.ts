import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => (this.todos = data));
  }

  deleteTodo(todo: Todo) {
    // Delete in the UI 
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Delete in the server
    this.todoService.deleteTodo(todo).subscribe();
  }
}