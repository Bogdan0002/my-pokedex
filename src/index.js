import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import PokemonDetails from './components/PokemonDetails';

const router = createBrowserRouter([
  {
    path: "/my-pokedex",
    element: <App />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// reportWebVitals();
