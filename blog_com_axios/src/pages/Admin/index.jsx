import './styles.css'
import { blogFetch } from '../../axios/config'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export const Admin = () => {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    const getPosts = async () => {
        try {
            const response = await blogFetch.get("/posts")
            setPosts(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (id) => {

        await blogFetch.delete(`posts/${id}`);
        const filteredPost = posts.filter((post) => post.id != id);
        setPosts(filteredPost);
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
                        <Link to={`/posts/edit/${post.id}`} className='btn edit-btn'>Editar</Link>
                        <button className="btn delete-btn"  onClick={() => deletePost(post.id)}>Excluir</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
