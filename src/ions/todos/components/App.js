import React from 'react';
import { FormattedMessage } from 'react-intl';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { Link } from 'react-router';
import { basePath } from '../constants';

const App = () => (
  <div>
    <h1>
      <FormattedMessage
        id="app.title"
        description="app title"
        defaultMessage="TODOS"
      />
    </h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <hr />
    <Link to={`${basePath}/unfiltered`}>
      Unfiltered Todos
    </Link>
  </div>
);

export default App;
