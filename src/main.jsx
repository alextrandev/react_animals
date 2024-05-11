import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css';
import App from './App';
window.require = (name) => new URL(name, import.meta.url).href;
console.log("Copyright © Alex Tran (https://alextran.dev)");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
