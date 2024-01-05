import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Bootnav from './Bootnav';
import { BrowserRouter } from 'react-router-dom';
import Content from './Content';
import Scroll from './useRef/Scroll';
import Blackwhite from './useRef/Blackwhite';
import Hello from './useState/Hello';
import Styledcom from './styled/Styledcom';
import Btns from './styled/Btns';
// import Preinterview from './useRef/Printerview';
import Inputui from './styled/Inputui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Bootnav></Bootnav>
    <Content></Content>
    <App />
    <Scroll></Scroll>
    <Hello></Hello>
    <Blackwhite></Blackwhite> */}
    {/* <Preinterview></Preinterview> */}
    {/* <Styledcom></Styledcom> */}
    {/* <Btns></Btns> */}
    <Inputui></Inputui>
  </BrowserRouter>
);

