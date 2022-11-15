import React from 'react';
import './badge.scss';

const Badge = () => {
    return <section className='badgeContainer'>
        <span class="material-symbols-outlined question">
            question_mark
        </span>
        <span class="material-symbols-outlined">
            chat_bubble
        </span>
        <section className='badgeContent'>0</section>
    </section>
}

export default Badge;