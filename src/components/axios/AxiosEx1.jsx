import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosEx1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태
const [error, setError] = useState(null); // 에러 상태

 useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data); // 데이터 저장
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts(); // 함수 호출 빠졌었음
  }, []);

    if((loading)) return <p>데이터를 불러오는중.....</p>
    if(error) return <p style={{color:'red'}}>에러:{error}</p>
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}