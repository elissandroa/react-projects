import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


export const InfiniteScroll = () => {
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(0);
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



    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100 &&
            !isLoading &&
            hasMoreDate) {
            setPage((prevPage) => prevPage + 1);
        }
    }

    useEffect(() => {
        const throttleHandleScroll = throttle(handleScroll, 150);
        window.addEventListener("scroll", throttleHandleScroll);

        return () => {
            window.removeEventListener("scroll", throttleHandleScroll);
        }

    }, [hasMoreDate, isLoading])


    return (
        <div>
            <h1>Infinite Scroll</h1>
            <ul>
                {
                    post.map((post) => (
                        <li key={Math.random() * 1000}>
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

function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) return;
        lastCall = now;
        return func(...args);
    };
}
