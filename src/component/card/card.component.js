import React, { useEffect, useState } from "react";
import './card.scss'

const QuestionCard = () => {
    const [users, setUsers] = useState(null);

    const getPosts = async ()=>{
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setUsers(data.slice(0, 10))
        // console.log();
        } catch (e) {
            throw new Error(e.message);
        }
    }

    useEffect(()=>{
        getPosts();
    },[])


    return <section className="card-container">
        {users && users.map(({title, body, id},i)=>
        <div key={i}>
        <section className="answer-count">
            <p>2</p>
            <p>24</p>
            <p>15</p>
        </section>
        <section className="card-body">
            <h2>{title}</h2>
            <p>{body}</p>
        </section></div>)}

    </section>
}

export default QuestionCard;