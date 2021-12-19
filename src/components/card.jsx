import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './card.module.css';

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <button
                onClick={handleClick}
                className={`${styles.card} ${styles.card_front}`}
            >
                ❓
            </button>

            <button
                onClick={handleClick}
                className={`${styles.card} ${styles.card_back}`}
            >
                {props.content}
            </button>
        </ReactCardFlip>
    );
};

export default Card;
