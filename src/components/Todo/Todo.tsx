import { observer } from 'mobx-react-lite';
import { TodoType, useStore } from '../../models/todo';
import { StyledTodo } from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

interface ItemProps {
  todo: TodoType;
}

const Todo = ({ todo }: ItemProps) => {
  const { deleteTodo, completeOneTodo } = useStore();
  const deleteOneTodo = (todo: TodoType) => {
    deleteTodo(todo);
  };
  const completeTodo = (todo: TodoType) => {
    completeOneTodo(todo);
  };
  console.log(todo);

  return (
    <StyledTodo>
      <input
        type="checkbox"
        name="check"
        defaultChecked={todo.done}
        onChange={() => completeTodo(todo)}
      />
      {todo.name}&nbsp;
      <Button onClick={() => deleteOneTodo(todo)}>
        <DeleteIcon />
      </Button>
    </StyledTodo>
  );
};
export default observer(Todo);
