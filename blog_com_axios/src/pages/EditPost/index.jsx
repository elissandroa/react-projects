import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blogFetch } from '../../axios/config'
import './styles.css'

export const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const getPost = async () => {
        const response = await blogFetch.get(`/posts/${id}`);
        const data = response.data;
        setTitle(data.title);
        setBody(data.body);

    }


    const updatePost = async (e) => {
        e.preventDefault();

        const editedPost = {
            title, body, userId: 1
        }

        await blogFetch.put(`/posts/${id}`, {
            body: editedPost,
        })
    }

    useEffect(() => {
        getPost();
    },[])

    return (

        <div className='new-post'>
            <h2>Editando: {title}</h2>
            <form onSubmit={(e) => updatePost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        name='title'
                        id='title'
                        placeholder='Digite o título'
                        value={title || ""}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteúdo:</label>
                    <textarea
                        name='body'
                        id='body'
                        placeholder='Digite o conteúdo'
                        value={body || ""}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value='Editar Post'
                    className='btn'
                />
            </form>
        </div>
    )
}
