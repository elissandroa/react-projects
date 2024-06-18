import './styles.css'
import { blogFetch } from '../../axios/config'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Admin = () => {
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
    }, []);

    if (!posts) {
        return <p>Carregando...</p>
    }
    return (

        <div className='admin'>
            <h1>Gerenciar Posts</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <div className="actions">
                        <Link className='btn edit-btn'>Editar</Link>
                        <button className="btn delete-btn">Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
