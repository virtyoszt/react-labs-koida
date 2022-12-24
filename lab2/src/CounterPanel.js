import React from 'react'
import Counter from './Counter'


export default function CounterPanel() {
    const counters = [
        {id: 1, initial:0, min: -5, max: 10},
        {id: 2, initial:5,},
        {id: 3}
    ];

return (
    <div>
        <h1>CounterPanel</h1>
        {counters.map((counter) => (
            <div>
                <Counter initial = {counter.initial} max = {counter.max} min = {counter.min}/>
            </div>  
        ))}
    </div>
  )
}
