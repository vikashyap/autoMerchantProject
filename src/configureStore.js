import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const configureStore = (preloadedState) => {
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  return createStore(
    reducers,
    preloadedState,
    compose(
      ...enhancers,
      applyMiddleware(ReduxPromise)
    )
  );
};

export default configureStore;
