import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import { BrowserRouter } from 'react-router-dom';

const store =configureStore();
console.log('store',store.getState());

// ReactDOM.render(
//   <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
