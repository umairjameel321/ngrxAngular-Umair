import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {TodoRemove} from '../../actions/todo.actions'
import { TodoReducer } from 'src/app/reducers/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(private store: Store<{todos: Todo[]}>) {
    store.pipe(select('todos')).subscribe(values => {
      console.log(values);
      this.todos = values;
    })
  }

  removeTodo(index: number) {
    this.store.dispatch(new TodoRemove(index))
  }

  ngOnInit() {
  }

}
