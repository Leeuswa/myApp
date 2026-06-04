import { useNavigate, useParams } from 'react-router-dom';

export default function TodoViewer() {
  const navigate = useNavigate();
  const { id } = useParams();

  const saved = localStorage.getItem('my-todos');
  const todos = saved ? JSON.parse(saved) : [];
  const todoItem = todos.find(item => item.id === id) || {};

  return (
    <div style={{ margin: 10 }}>
      <p>- ID : {id}</p>
      <p>- 할일 내용 : {todoItem.text}</p>
      <p>- 할일 여부 : {todoItem.checked ? '완료' : '미완료'}</p>
      <input type="button" onClick={() => navigate(-1)} value="뒤로가기" />
    </div>
  );
}