import {useState} from 'react';
import styles from './Counter.module.css'


export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const isMax = count === 5;

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={`${styles.display} ${isMax ? styles.red : ''}`}>
                    {count}
                </div>
                <div className={styles.buttons}>

                    <button onClick={increment}
                            disabled={count >= 5}>
                        inc
                    </button>
                    <button onClick={reset}
                            disabled={count === 0}>
                        reset
                    </button>
                </div>
            </div>

        </div>

    )


}