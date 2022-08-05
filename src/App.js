import React, { useState } from 'react';
import CounterHooks from './CounterHooks'
import Counter from './Counter'

export const ThemeContext = React.createContext(); // has 2 portions: provider and consumer, provider passes out a value
// user just uses the value. Wrap all the code we want to. "<ThemeContext.Provider>CODE HERE</ThemeContext.Provider>"

// Using context:
// Uses context API that lets us pass values deeply into our stack of components without having to manually
// having to pass them down. For example: we can define our context within the app and able to access them everywhere
// kind of like a global variable\
// Example:
// If using a theme, will let you pass teh theme throught the app by just defining it in app

function App() {
    console.log("Render App")
    const [theme, setTheme] = useState('red');

    return (
        // have to use state to use theme
            <ThemeContext.Provider value={{ backgroundColor: theme }}>
                Functional Counter (Hooks)
                <CounterHooks initialCount={0}/>

                Class Counter
                <Counter initialCount={0}/>
                <button onClick={() => setTheme(prevTheme => {
                    return prevTheme === 'red' ? 'blue' : 'red' // if bg color is red, switch to blue, or red if blue
                })}>Toggle Theme</button>
            </ThemeContext.Provider>
    )
}

export default App;
