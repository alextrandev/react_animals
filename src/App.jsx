import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/layout/Root';
import Home from './pages/Home.jsx';
import { animals, birds, fishes, insects } from './assets/animalsList.js';
import CategoryPage from './pages/CategoryPage.jsx';
import AnimalPage from './pages/AnimalPage.jsx';
import About from './pages/About.jsx';

export default function App() {
  const [zoo, setZoo] = useState({ animals, birds, fishes, insects }) // need work

  const likesHandler = (name, category, action) => {
    setZoo(prevState => ({
      ...prevState,
      [category]: prevState[category].map(animal =>
        animal.name === name
          ? { ...animal, likes: animal.likes + (action === 'add' ? 1 : -1) }
          : animal
      ),
    }));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root zoo={zoo} />,
      children: [
        { path: "/", element: <Home zoo={zoo} /> },
        {
          path: ":category",
          element: <CategoryPage
            {...zoo}
            addLike={likesHandler}
            removeLike={likesHandler} />
        },
        { path: ":category/:animal", element: <AnimalPage {...zoo} /> },
        { path: "about", element: <About /> }
      ]
    }
  ])
  return <RouterProvider router={router} />
}