import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { CountdownModule } from 'ngx-countdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CountdownModule, NzTimelineModule, NzIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
