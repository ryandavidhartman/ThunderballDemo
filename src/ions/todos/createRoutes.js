import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { basePath } from './constants';

import App from '../../app/containers/App';
import TodoView from './containers/TodoView';
import UnfilteredTodoView from './containers/UnfilteredTodoView'

export default function createRoutes(/* getState */) {
  return (
    <Route component={App} path={basePath}>
      <IndexRoute component={TodoView} />
      <Route path="unfiltered" component={UnfilteredTodoView}/>
    </Route>
  );
}
