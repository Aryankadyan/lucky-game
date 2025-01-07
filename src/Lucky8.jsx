import { useState } from 'react';
import { getRolls, sum } from './utils';
import './Lucky8.css';

function Lucky8(){
    const [dice, setDice] = useState(getRolls(2));
    const won = sum(dice) == 8;

    function roll(){
        setDice(getRolls(2));
    }

    return(
        <main className='Lucky8'>
            <h1>Lucky8 {won && "You won!"}</h1>
            <section className='Lucky8-dice'>
                <div className='Lucky8-die'>{dice[0]}</div>
                <div className='Lucky8-die'>{dice[1]}</div>
            </section>
            <button onClick = {roll}>Roll Again Yarr!</button>
        </main>
    );
}

export default Lucky8;