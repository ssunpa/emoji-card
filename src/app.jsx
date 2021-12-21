import React, { useState } from 'react';
import styles from './app.module.css';
import CardHide from './components/bottom/card_hide';
import CardList from './components/bottom/card_list';
import CardShow from './components/top/card_show';
import { emoji } from './data/emoji';

function App() {
    const [cardItems, setCardItems] = useState(emoji.slice(0, 6));
    const [showCard, setShowCard] = useState(
        emoji[Math.floor(Math.random() * 6)]
    );

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
        return newItems;
    };

    const handleRandomShowItem = (items) => {
        const randomNum = Math.floor(Math.random() * items.length);
        setShowCard(items[randomNum]);
    };

    const handleReset = () => {
        const newList = handleRandomItems();
        handleRandomShowItem(newList);
    };
    return (
        <>
            <section className={styles.top}>
                <span className={styles.title}>👇FIND ME!👇</span>
                <CardShow show={showCard} key={cardItems.id} />
            </section>
            <section className={styles.bottom}>
                <div>
                    <CardList show={showCard} cardItems={cardItems} />
                </div>
                <button onClick={handleReset} className={styles.resetBtn}>
                    RESET
                </button>
            </section>
        </>
    );
}

export default App;
