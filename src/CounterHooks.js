import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({ initialCount }) {
    console.log('Render Counter Hooks')
    const [count, setCount] = useState(initialCount) // state is just a single number instead of a whole object
    // if we want, we can use multiple UseStates
    // *HOW DOES IT SAVE YOUR STATE: rely on calling the hooks in the same place everytime and has to be at the most top
            // level of your function. It stores state globally
    const style = useContext(ThemeContext)

    return (
        <div>
            <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    )
}
