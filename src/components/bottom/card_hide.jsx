import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styles from './card_hide.module.css';

const CardHide = (props) => {
    // const [isFlipped, setIsFlipped] = useState(props.isFlipped);
    let isFlipped = props.isFlipped;
    const handleClick = () => {
        isFlipped = !isFlipped;
        console.log(isFlipped);
        // setIsFlipped(true);
        // if (props.hide.id === props.show.id) {
        //     console.log('맞았당');
        // } else {
        //     console.log('아니당');
        //     setTimeout(() => {
        //         setIsFlipped(false);
        //     }, 1300);
        // }
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
