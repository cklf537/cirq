import React from "react";
import './addquestions.scss';
// import '../../scss/cirq.scss';

const AddQuestion = ()=>{
    return <section className="add-question-container gb-20" >
        <h2 className="gr-20">Question:</h2>
        <p><input type="text" className="input-primary gr-20 search-box" placeholder="Post your first Question?" /></p>
        <p><button className="btn-main">POST</button></p>
    </section>
}

export default AddQuestion;