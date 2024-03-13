
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const FilterPostWithUseState = () => {
    const [posts, setPosts] = useState([]);
    const [filterPosts, setFilterPosts] = useState([]);
    const searchInputRef = useRef();

    const handleSearchFilter = ()=>{
        const searchInput = searchInputRef.current.value.toLowerCase();
        const fposts = posts.filter(post=>post.title.includes(searchInput))
        setFilterPosts(fposts);

    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setPosts(response.data);
            setFilterPosts(response.data);
        })
        .catch(error=>console.log(error));
    },[]);
    
  return (
    <div>
      <div>
        <input ref={searchInputRef} type="text"  onChange={handleSearchFilter} />
        <ol>
            {
                filterPosts && filterPosts.map((post, i)=><li key={i}>{post.title}</li>)
            }
        </ol>
      </div>
    </div>
  )
}

export default FilterPostWithUseState
