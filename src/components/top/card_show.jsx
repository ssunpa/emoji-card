import React from 'react';
import styles from './card_show.module.css';

const CardShow = (props) => (
    <div className={styles.card}>{props.show.content}</div>
);

export default CardShow;
