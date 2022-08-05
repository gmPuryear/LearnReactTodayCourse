import React from 'react'
import CounterHooks from './CounterHooks'
import Counter from './Counter'

function App() {


    return (
        <>
            Functional Counter (Hooks)
            <CounterHooks initialCount={0}/>

            Class Counter
            <Counter initialCount={0}/>
        </>
    )
}

export default App;
