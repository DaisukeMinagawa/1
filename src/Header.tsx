import React from 'react'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

type Props = { user: { name: string; age: number } }
const Header = (props: Props) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>
                <span>{props.user.name}, {props.user.age}</span>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default Header
