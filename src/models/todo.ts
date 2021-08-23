import { destroy, types } from 'mobx-state-tree';
import { useMemo } from 'react';

export interface TodoType {
  id: number;
  name: string;
  done: boolean;
}
const Todo = types.model({
  id: types.optional(types.number, 1),
  name: types.optional(types.string, ''),
  done: types.optional(types.boolean, false),
});

const Todos = types.model({
  todos: types.optional(types.array(Todo), []),
});
const FindText = types.model({
  findText: types.optional(types.string, ''),
});

const RootStore = types
  .model({
    todo: types.map(Todo),
    todos: types.array(Todo),
    findText: types.string,
  })
  .actions((store) => ({
    addTodo(todo: TodoType) {
      store.todos.push(todo);
    },
    deleteTodo(todo: TodoType) {
      destroy(todo);
    },
    completeOneTodo(todo: TodoType) {
      todo.done = !todo.done;
    },
    changeText(str: string) {
      store.findText = str;
    },
  }));

let _store: any;

export const useStore = () => {
  const store = useMemo(() => {
    if (!_store)
      _store = RootStore.create({
        todos: [
          {
            id: 1,
            name: 'Eat cake',
            done: false,
          },
          { id: 2, name: 'Walk', done: true },
          { id: 3, name: 'Buy bread', done: false },
        ],
        todo: {},
        findText: '',
      });
    return _store;
  }, []);
  return store;
};
