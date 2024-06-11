import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


export const InfiniteScroll = () => {
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreDate, setHasMoreData] = useState(true);


    const fetchPosts = async () => {
        if (isLoading) return;

        setIsLoading(true);

        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
            );
            if (response.data.length > 0) {
                setPost((prevPost) => [...prevPost, ...response.data]);
            } else {
                setHasMoreData(false);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [page]);

    return (
        <div>
            <h1>Infinite Scroll</h1>
            <ul>
                {
                    post.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))
                }
            </ul>
            {isLoading && <p>Carregando mais posts...</p>}
        </div>
    )
}
