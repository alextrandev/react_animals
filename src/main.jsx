import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/layout/Root';
import Home from './pages/Home.jsx';
import Animals from './pages/Animals.jsx';
import Birds from './pages/Birds.jsx';
import Fishes from './pages/Fishes.jsx';
import Insects from './pages/Insects.jsx';
window.require = (name) => new URL(name, import.meta.url).href;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/animals", element: <Animals /> },
      { path: "/birds", element: <Birds /> },
      { path: "/fishes", element: <Fishes /> },
      { path: "/insects", element: <Insects /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
