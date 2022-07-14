import React from 'react'
import ReactDOM from 'react-dom/client'
import PokemonFinder from './PokemonFinder'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PokemonFinder />
  </React.StrictMode>
)
