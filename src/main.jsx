import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/layout/Root';
import Home from './pages/Home.jsx';
import { animals, birds, fishes, insects } from './assets/animalsList.js';
import CategoryPage from './pages/CategoryPage.jsx';
window.require = (name) => new URL(name, import.meta.url).href;


function App() {
  const [zoo, setZoo] = useState({ animals, birds, fishes, insects })
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: ":category", element: <CategoryPage {...zoo} /> },
        // { path: "/animals", element: <Animals /> },
        // { path: "/birds", element: <Birds /> },
        // { path: "/fishes", element: <Fishes /> },
        // { path: "/insects", element: <Insects /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
