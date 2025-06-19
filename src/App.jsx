import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    fetch('https://dummyjson.com/todos').then((data) =>
      data.json().then((data) => setCount(data.todos.length)),
    );
  }, []);

  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1 id="counter">length {count}</h1>
      </div>
    </>
  );
};

export default App;
