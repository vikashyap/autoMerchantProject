import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import AddMerchant from './components/addMerchant'
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { Router, browserHistory, Route} from 'react-router';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/addMerchant" component={AddMerchant}/>
            <Route path="/editMerchant" component={AddMerchant}/>

    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
