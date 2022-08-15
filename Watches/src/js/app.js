import '../scss/main.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Watches } from './watches';

document.oncontextmenu = () => {
   return false;
};
const App = () => {
   return (
      <>
         <Watches/>
      </>
   );
};

ReactDOM.render(<App />, document.getElementById('app'));
