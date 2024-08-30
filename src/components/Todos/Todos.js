import { useEffect, useReducer, useRef } from 'react';

const init = [
  {
    id: 1,
    content: 'Thu 2 hoc HTML',
  },
  {
    id: 2,
    content: "Thu 3 hoc CSS"
  },
  {
    id: 3,
    content: "Thu 4 hoc JS"
  }
];

const reducer = (state, action) => {
  // action:  create , delete
  switch (action.type) {
    case 'create':
      return [
        ...state,
        {
          id: Date.now(),
          content: action.value
        }
      ];
    case 'delete':
      const newState = state.filter(todo => todo.id !== action.id);
      return newState;
    default:
      return state;

  }
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, init);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.inputTodo.value;
    if (value) {
      dispatch({
        type: 'create',
        value: value
      });

      inputRef.current.value = '';
    }
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      id: id
    });
  }

  // console.log(todos);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} name='inputTodo'></input>
        <button>Them todo</button>
      </form>

      {todos.length > 0 && (
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              {item.content}
              <button onClick={() => handleDelete(item.id)}>Xoa</button>
            </li>
          ))}
        </ul>
      )}
    </>

  );
}

export default Todos;