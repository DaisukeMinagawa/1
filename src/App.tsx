import { useState } from 'react'

import './App.css'
import Footer from "./Footer";
import Header from './Header';

function App() {
  const user = { name: "Exampleuser", age: 38, createdAt: new Date().getFullYear() }

  return (
    <div className="App">
      <Header user={user} />
      <Footer user={user} />
    </div>
  )
}

export default App
