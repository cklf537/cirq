import React from "react";
import './addquestions.scss';
// import '../../scss/cirq.scss';

const AddQuestion = ()=>{
    return <section className="add-question-container gb-20 " >
        <h2 className="gr-20">Question:</h2>
        <p><input type="text" className="input-primary gr-20 search-box" placeholder="Post Question?" /></p>
        <p><button className="btn-main gr-20">POST</button></p>
        <p className=""><span className="material-symbols-outlined">help</span><br /> Help</p>
    </section>
}

export default AddQuestion;