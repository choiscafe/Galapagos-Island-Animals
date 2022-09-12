
// import './App.css';
import {useEffect, useState} from 'react'
import Header from './Header'
import ListingsContainer from './ListingsContainer'
import Form from './Form'
import Home from './Home'
import NavBar from './NavBar'
import { Switch, Route } from 'react-router-dom'


function App() {

  const [animals, setAnimals]= useState([])
  const [formInfo, setFromInfo] = useState({
    id:"",
    name:"",
    description:""
  })

  useEffect(() => {
    fetch('http://localhost:3000/animals')
    .then((res) => res.json())
    .then((animalData) => {
      setAnimals(animalData)
      })
      }, [])

  function handleChange(event){
    // console.log("Value ")
    setFromInfo({...formInfo, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newAnimal= {...formInfo, id: animals.length+1}
    setAnimals([...animals, newAnimal])

    fetch('http://localhost:3000/animals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAnimal)
        })
    }
    
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/animals"> 
          <ListingsContainer animals={animals}/>
        </Route>
        <Route exact path="/form">
          <Form handleChange={handleChange} handleSubmit={handleSubmit} formInfo={formInfo}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
      
      <header className="App-header">
        <h1 className="header-title">Galapagos Island</h1>
        <img src className="App-logo" alt="logo" />
        <p>
          Submit another Galapagos animal that you know!
        </p>
      </header>
    </div>
  );
}

export default App;
