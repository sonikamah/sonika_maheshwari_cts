import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import './index.css';
import { App } from './App';
import counterReducer from './reducers';

const store = createStore(counterReducer);
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )