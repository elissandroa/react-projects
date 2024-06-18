import './styles.css'
import { blogFetch } from '../../axios/config'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

export const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await blogFetch.get(`/posts/${id}`);
        setPost(response.data);
      }
  
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [id])

  if (!post) {
    return <p>Carregando ...</p>
  }
  return (
    <div className='post-container'>
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>

    </div>
  )
}
