import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';

  persons = [{ name: 'Ahmed', title: 'Engineer' }, { name: 'Mohamed', title: 'Teacher' }, { name: 'Aly', title: 'Player' }]
}
