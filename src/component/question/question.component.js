import React from "react";
import { useParams } from "react-router";

const Question = ()=>{
    const {id} = useParams();
    return <div>{`Question id =${id}`} </div>
}

export default Question;