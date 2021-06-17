import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-content'>
                <span className='i-header'>База отдыха Рыбака</span>
                <div className='i-phone'>
                    <i className='fas fa-phone-alt'></i>
                    <span className='phone'>+7 (921) 935 00 25</span>
                </div>
            </div>
        </div>
    )
}

export default Intro;
