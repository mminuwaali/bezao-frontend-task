import store from './store';
import Global from './pages';
import Router from './router';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Global />
    <Router />
  </Provider>
);
