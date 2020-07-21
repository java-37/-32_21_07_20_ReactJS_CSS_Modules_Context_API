import React from 'react';
import './Card.css';

export default props => {
    return (
        <div className='Card'>
            <h2 className='Card-title'>{props.title}</h2>
            <h3 className='Card-subtitle'>{props.subtitle}</h3>
        </div>
    );
}