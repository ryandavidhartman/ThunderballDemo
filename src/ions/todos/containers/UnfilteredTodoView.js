import React from 'react';
import { hot } from 'react-hot-loader';
import Helmet from 'react-helmet-async';

const TodoView = () => (
  <div>
    <Helmet>
      Unfiltered TODOs
    </Helmet>
    <h1>
      Unfiltered TODOs
    </h1>
  </div>
);

export default hot(module)(TodoView);
