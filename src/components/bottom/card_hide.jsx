import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './card_hide.module.css';

const CardHide = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(true);
        setTimeout(() => {
            setIsFlipped(false);
        }, 1500);
    };

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <button
                onClick={handleClick}
                className={`${styles.card} ${styles.card_front}`}
            >
                ❓
            </button>

            <button className={`${styles.card} ${styles.card_back}`}>
                {props.hide}
            </button>
        </ReactCardFlip>
    );
};

export default CardHide;
