import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

function App() {
  const [peoples, setPeoples] = useState([]);

  useEffect( () =>{
    fetch('https://swapi.dev/api/people')
    .then(res => res.jason())
    .then(data => setPeoples(data))
  } ,[]);
  console.log(peoples);
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
