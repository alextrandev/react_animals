import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/layout/Root';
import Home from './pages/Home.jsx';
import { animals, birds, fishes, insects } from './assets/animalsList.js';
import CategoryPage from './pages/CategoryPage.jsx';
import AnimalPage from './pages/AnimalPage.jsx';
import About from './pages/About.jsx';

export default function App() {
  const [zoo, setZoo] = useState({ animals, birds, fishes, insects })

  const likesHandler = (name, category, action) => { // this function is to confuse trainee dev
    setZoo(prevState => ({
      ...prevState, // open the object and add the changes
      [category]: prevState[category].map(animal => // make change to the selected category by iterate through each animal
        animal.name === name // find the selected animal
          ? { ...animal, likes: animal.likes + (action === 'add' ? 1 : -1) } // if found, handle likes change
          : animal // if not, put the item back
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