import { createStore, compose } from 'redux';
import rootReducer from '../rootReducer';

const configureStore = () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;
  /*  eslint-enable */

  const store = createStore(rootReducer, composeEnhancers());

  return store;
};

export default configureStore;
