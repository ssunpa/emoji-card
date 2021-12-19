import React, { useState } from 'react';
import styles from './app.module.css';
import CardHide from './components/bottom/card_hide';
import CardShow from './components/top/card_show';

function App() {
    const [cardItems, setCardItems] = useState([
        { id: 1, content: '😀' },
        { id: 2, content: '😁' },
        { id: 3, content: '😂' },
        { id: 4, content: '😆' },
        { id: 5, content: '😘' },
        { id: 6, content: '😴' },
    ]);

    const handleRandomItem = (items) => {
        const randomNum = Math.floor(Math.random() * cardItems.length);
        return items[randomNum];
    };

    return (
        <>
            <section className={styles.top}>
                <span className={styles.title}>👇FIND ME!👇</span>
                <CardShow
                    show={handleRandomItem(cardItems)}
                    key={cardItems.id}
                />
            </section>
            <section className={styles.bottom}>
                {cardItems.map((items) => (
                    <CardHide hide={items.content} key={cardItems.id} />
                ))}
            </section>
        </>
    );
}

export default App;
