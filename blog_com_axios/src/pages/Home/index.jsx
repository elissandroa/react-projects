import './styles.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Home = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  }, [])
  return (
    <div>{posts.map((post) => (
      <h1>{post.title}</h1>
    ))}</div>
  )
}
