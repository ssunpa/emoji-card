import React from 'react';
import styles from './card.module.css';

const Card = (props) => (
    <section className={styles.card}>{props.content}</section>
);

export default Card;
