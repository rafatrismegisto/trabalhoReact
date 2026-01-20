import { useState, useEffect } from 'react'
import Home from './pages/Home'
import './index.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Catálogo de Produtos</h1>
      </header>
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App
