import React from "react";
import './card.scss'

const QuestionCard = () => {
    return <section className="card-container">
        <section className="answer-count">
            <p>2</p>
            <p>24</p>
            <p>15</p>
        </section>
        <section className="card-body">
            <h2>This Question</h2>
            <p>I'd like to find a better way to intake user prompts.</p>

            <p>string string_one_ = "";</p>
            <p>string string_two_ = "";</p>
            <p>string string_three_ = "";</p>
            <p></p>
            <p>// store strings from user</p>
            <p>cin >> string_one_;</p>
            <p>cin >> string_two_;</p>
            <p>cin >> string_three_;</p>
            <p>I am wondering if there is a better way to implement this process in C++? Also with an added condition if the user entered less than three strings?</p>

            <p>*The user must select enter after each string.</p>
        </section>

    </section>
}

export default QuestionCard;