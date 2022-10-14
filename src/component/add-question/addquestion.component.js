import React from "react";
import './addquestions.scss';

const AddQuestion = ()=>{
    return <section className="add-question-container" >
        <h2>Q</h2>
        <p><input type="text" className="input-primary" /></p>
        <p><button className="btn-primary">POST ?</button></p>
    </section>
}

export default AddQuestion;