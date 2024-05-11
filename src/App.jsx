import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/layout/Root';
import Home from './pages/Home.jsx';
import { animals, birds, fishes, insects } from './assets/animalsList.js';
import CategoryPage from './pages/CategoryPage.jsx';
import AnimalPage from './pages/AnimalPage.jsx';

export default function App() {
  const [zoo, setZoo] = useState({ animals, birds, fishes, insects }) // need work
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root zoo={zoo}/>,
      children: [
        { path: "/", element: <Home zoo={zoo} /> },
        { path: ":category", element: <CategoryPage {...zoo} /> },
        { path: ":category/:animal", element: <AnimalPage {...zoo} /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}