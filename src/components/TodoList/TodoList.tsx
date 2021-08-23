import { observer } from 'mobx-react-lite';
import { TodoType, useStore } from '../../models/todo';
import Todo from '../Todo/Todo';
import { StyledTodoList } from './styles';

const TodoList = () => {
  const { todos, findText } = useStore();

  return (
    <>
      <h2>Todo list</h2>
      <StyledTodoList>
        {todos
          .filter(
            (todo: TodoType) =>
              todo.name.toLowerCase().indexOf(findText.toLowerCase()) !== -1
          )
          .map((todo: TodoType) =>
            todo.done !== true ? <Todo todo={todo} key={todo.id} /> : ''
          )}
      </StyledTodoList>
      <h2>
        Completed&nbsp;
        {todos.filter((todo: TodoType) => todo.done === true).length}/
        {todos.length}
      </h2>
      <StyledTodoList>
        {todos
          .filter(
            (todo: TodoType) =>
              todo.name.toLowerCase().indexOf(findText.toLowerCase()) !== -1
          )
          .map((todo: TodoType) =>
            todo.done === true ? <Todo todo={todo} key={todo.id} /> : ''
          )}
      </StyledTodoList>
    </>
  );
};

export default observer(TodoList);
