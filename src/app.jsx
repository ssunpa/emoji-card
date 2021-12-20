import React, { useState } from 'react';
import styles from './app.module.css';
import CardHide from './components/bottom/card_hide';
import CardShow from './components/top/card_show';
import { emoji } from './data/emoji';

function App() {
    const [cardItems, setCardItems] = useState(emoji.slice(0, 6));

    const randomIdx = (items) => {
        const randomIdx = new Set();

        while (1) {
            let randomNum = Math.floor(Math.random() * items.length);
            randomIdx.add(randomNum);
            if (randomIdx.size > 5) {
                return randomIdx;
            }
        }
        return randomIdx;
    };

    const handleRandomItems = () => {
        const randomIdxArr = [...randomIdx(emoji)];
        const newItems = randomIdxArr.map((idx) => {
            return emoji[idx];
        });
        setCardItems(newItems);
    };

    const handleRandomShowItem = (items) => {
        const randomNum = Math.floor(Math.random() * items.length);
        return items[randomNum];
    };

    return (
        <>
            <section className={styles.top}>
                <span className={styles.title}>👇FIND ME!👇</span>
                <CardShow
                    show={handleRandomShowItem(cardItems)}
                    key={cardItems.id}
                />
            </section>
            <section className={styles.bottom}>
                <div className={styles.list}>
                    {cardItems.map((items) => (
                        <CardHide hide={items.content} key={cardItems.id} />
                    ))}
                </div>
                <button onClick={handleRandomItems} className={styles.resetBtn}>
                    RESET
                </button>
            </section>
        </>
    );
}

export default App;
