import React, { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

const defaultState = {
    posts: [],
    filteredPosts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_RESULT":
            return {
                ...state,
                posts: action.payload,
                filteredPosts: action.payload
            }
        case "FILTER_POST":
            const filteredPosts = state.posts.filter((post) =>
                post.title.toLowerCase().includes(action.payload.toLowerCase())
            );
            return {
                ...state,
                filteredPosts,
            };
        default:
            return state;
    }
}

const FilterPosts = () => {

    const [state, dispatch] = useReducer(reducer, defaultState);
    const searchPost = useRef();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => dispatch({
                type: "FETCH_RESULT",
                payload: response.data
            })).catch(error => console.log(error));
    }, [])

    const handleFilterPost = () => {
        dispatch({
            type: "FILTER_POST",
            payload: searchPost.current.value.toLowerCase()
        })
    }
    return (
        <div>
            <ol>
                <li>
                    <input ref={searchPost} type="text" onChange={handleFilterPost} />
                </li>
                {
                    state.filteredPosts.length > 0 && state.filteredPosts.map((post, i) => <li key={i}>{post.title}</li>)
                }
            </ol>
        </div>
    )
}

export default FilterPosts
