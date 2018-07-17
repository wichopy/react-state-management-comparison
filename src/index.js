import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import CardStore from './stores/CardStore'
const stores = {
  CardStore: new CardStore()
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
