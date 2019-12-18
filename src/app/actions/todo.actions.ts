import {Action} from '@ngrx/store';
import {TodoActionTypes} from '../shared/enum/todo-action-types.enum';

export class ActionParent implements Action {
    type: any;
    payload: any;
}

export class TodoAdd implements ActionParent {
    type = TodoActionTypes.Add;    
    constructor(public payload: any) {}
}

export class TodoRemove implements ActionParent {
    type = TodoActionTypes.Remove;    
    constructor(public payload: any) {}
}