import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useStore } from '../../models/todo';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormContent } from './styles';

const TodoForm: React.FC = () => {
  const [value, setValue] = useState('');
  const { addTodo, changeText } = useStore();

  const changeInput = (valueOfInput: string) => {
    setValue(valueOfInput);
    changeText(valueOfInput);
  };
  const addNewTodo = () => {
    value &&
      addTodo({
        id: Math.random(),
        name: value,
        done: false,
      });
    setValue('');
    changeText('');
  };

  return (
    <FormContent>
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => changeInput(e.target.value)}
        value={value}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addNewTodo}
        disabled={value.length === 0}
      >
        Add task
      </Button>
    </FormContent>
  );
};

export default observer(TodoForm);
