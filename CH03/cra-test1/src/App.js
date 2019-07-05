import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Todo from './components/Todo';
import MyComponent2 from './components/MyComponent2';
import Todo2 from './components/Todo2';

function App() {
  return (
    <div>
      <MyComponent />
      <Todo />
      <MyComponent2 />
      <Todo2 title="저놈은" desc="뭐하는놈이지"/>
    </div> 
  );
}

export default App;
