
import {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Form from './Form'
import Search from "./Search"
import ListingsContainer from './ListingsContainer'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'


function App() {

  const [animals, setAnimals]= useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/animals')
    .then((res) => res.json())
    .then((animalData) => {
      setAnimals(animalData)
      })
      }, [])

  const displayedAnimals = animals.filter((animal) => {
    return animal.name.toLowerCase().includes(searchTerm.toLowerCase())
      ||animal.type.value
      ||animal.size.toLowerCase().includes(searchTerm.toLowerCase())
      ||animal.life_expectancy.toLowerCase().includes(searchTerm.toLowerCase())
      ||animal.fun_fact.toLowerCase().includes(searchTerm.toLowerCase())
  });

  function handleSubmit(animal) {
    const newAnimal= {...animal, id: animals.length+1}
    setAnimals([...animals, newAnimal])
    

    fetch('http://localhost:3000/animals', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAnimal)
        })
        alert('The Animal is Successfully Added!')
    }
    
  return (
    <div className="App">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NavBar />
      <Switch>
        <Route exact path="/animals"> 
          <ListingsContainer animals={displayedAnimals}/>
        </Route>
        <Route exact path="/form">
          <Form handleSubmit={handleSubmit} />
        </Route>
        <Route exact path="/">
          <Home animals={displayedAnimals}/>
        </Route>
        <Route path="*">
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
