import React, { useState } from 'react';
import CardHide from './card_hide';
import styles from './card_list.module.css';

const CardList = (props) => {
    const cardList = [...props.cardItems];

    return (
        <div className={styles.list}>
            {cardList.map((items) => (
                <CardHide
                    show={props.show}
                    hide={items}
                    key={items.id}
                    onGameWin={props.onGameWin}
                />
            ))}
        </div>
    );
};

export default CardList;
