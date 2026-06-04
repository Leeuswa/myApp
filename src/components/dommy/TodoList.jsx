import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TodoList() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('my-todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('my-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo = { id: new Date().toISOString(), text: input, checked: false };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  };

  return (
    <div style={{ margin: 10 }}>
      <h2>할 일 목록</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>추가</button>
      <p>남은 할 일 : {todos.filter(t => !t.checked).length}개</p>
      {todos.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
          <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} style={{ margin: 5 }}>삭제</button>
          <button onClick={() => navigate('/todolist/' + todo.id)} style={{ margin: 5 }}>상세보기</button>
        </div>
      ))}
    </div>
  );
}