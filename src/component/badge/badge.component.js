import React from 'react';
import './badge.scss';

const Badge = () => {
    return <section className='badgeContainer'>
        <span className="material-symbols-outlined question">
            question_mark
        </span>
        <span className="material-symbols-outlined">
            chat_bubble
        </span>
        <section className='badgeContent'>0</section>
    </section>
}

export default Badge;