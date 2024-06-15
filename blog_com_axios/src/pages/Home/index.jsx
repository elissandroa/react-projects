import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { blogFetch } from '../../axios/config'


export const Home = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts")
      setPosts(response.data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  }, [])
  return (
    <div className="home">
      <h1>Últimos posts</h1>
      {posts.length === 0 ? "Carregando..." : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className='btn'>Ler mais</Link>
          </div>
        ))
      )}
    </div>

  )
}
