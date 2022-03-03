import React from 'react';
import ReactDOM from 'react-dom';
import { MenuContext } from './Context/menuContext';
import './index.css';
import Root from './Root/index.jsx';


ReactDOM.render(
  <React.StrictMode>
    <MenuContext>
      <Root />
    </MenuContext>
  </React.StrictMode>,
  document.getElementById('root')
);


