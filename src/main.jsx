import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css';
import Root from './components/layout/Root.jsx';
import Home from './pages/Home.jsx';
window.require = (name) => new URL(name, import.meta.url).href;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
