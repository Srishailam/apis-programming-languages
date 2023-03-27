import React, {useState, useEffect} from 'react'
import ProgrammingLanguages from './components/ProgrammingLanguages'
import logo from './logo.svg';
import './App.css';

function App() {
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  setIsLoading(true);
  fetch(`http://localhost:3000/programming-languages`)
  .then(response => response.json())
  .then(data=> {
    setData(data)
    setIsLoading(false)
  })
}, [])

if(isLoading || data.length === 0){
  return "Loading..."
}

  return (
    <div className="App">
      <header className="App-header">
        <ProgrammingLanguages languages={data}/>
      </header>
    </div>
  );
}

export default App;
