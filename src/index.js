import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SeachPanel from './components/SeachPanel';
import TodoList from './components/TodoList';

const App = () => {

  const todoDate = [
    {label: 'Drink Coffee', important:false, id: 1},
    {label: 'Make Awesome App', important:true, id: 2},
    {label: 'Have a lunch', important:false, id: 3}
  ];
  const isLoggedIn = false;
  const loginBox = <span>Login in please</span>;
  return (
    <div>
      { isLoggedIn ? null : loginBox }
      <AppHeader/>
      <SeachPanel/>
      <TodoList todos={todoDate}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));

