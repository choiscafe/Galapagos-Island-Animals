
// import './App.css';
import {useEffect, useState} from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Form from './Form'
import Search from "./Search"
import ListingsContainer from './ListingsContainer'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'


function App() {

  const [animals, setAnimals]= useState([])
  const [searchTerm, setSearchTerm] = useState("");
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

  const displayedAnimals = animals.filter((animal) => {
  return animal.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

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
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/animals"> 
          <ListingsContainer animals={displayedAnimals}/>
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
      
      
    </div>
  );
}

export default App;
