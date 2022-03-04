import React from 'react';
import ReactDOM from 'react-dom';
import { MenuContext } from './Context/menuContext';
import { MovieContext } from './Context/moviesContext';
import './index.css';
import Root from './Root/index.jsx';


ReactDOM.render(
  <React.StrictMode>
    <MovieContext>
      <MenuContext>
        <Root />
      </MenuContext>
    </MovieContext>
  </React.StrictMode>,
  document.getElementById('root')
);


