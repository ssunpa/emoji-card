import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './card_hide.module.css';

const CardHide = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        handleMatch(props.show, props.hide);
    };

    const handleMatch = (q, a) => {
        setIsFlipped(true);
        if (q.id === a.id) {
            console.log('맞았당');
        } else {
            console.log('아니당');
            setTimeout(() => {
                setIsFlipped(false);
            }, 1300);
        }
    };
    return (
        <>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <button
                    onClick={handleClick}
                    className={`${styles.card} ${styles.card_front}`}
                >
                    ❓
                </button>

                <button className={`${styles.card} ${styles.card_back}`}>
                    {props.hide.content}
                </button>
            </ReactCardFlip>
        </>
    );
};

export default CardHide;
