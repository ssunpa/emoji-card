import React, { useState } from 'react';
import styles from './app.module.css';
import Card from './components/card';

function App() {
    const [cardItems, setCardItems] = useState([
        { id: 1, content: '😀' },
        { id: 2, content: '😁' },
        { id: 3, content: '😂' },
        { id: 4, content: '😆' },
        { id: 5, content: '🤣' },
    ]);
    return (
        <div className={styles.bottom}>
            {cardItems.map((items) => (
                <Card content={items.content} />
            ))}
        </div>
    );
}

export default App;
