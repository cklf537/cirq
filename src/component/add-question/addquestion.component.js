import React from "react";
import './addquestions.scss';
// import '../../scss/cirq.scss';

const AddQuestion = ()=>{
    return <section className="add-question-container" >
        <h2>Q</h2>
        {/* <p><input type="text" className="input-primary" placeholder="Search..." /></p> */}
        <p><button className="btn-main">THIS IS A SAMPLE BUTTON</button></p>
        <p><button className="btn-secondary">POST ?</button></p>
        <p><button className="btn-outlined">POST ?</button></p>
    </section>
}

export default AddQuestion;