import router from './router';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default () => (
  <Suspense>
    <Router>
      <Routes>
        {router.map((R, key) => (<Route key={key} {...R} element={<R.element />} />))}
      </Routes>
    </Router>
  </Suspense>
);
