import { useState } from "react"

function Form ({ handleSubmit }){

  const [formInfo, setFormInfo] = useState({
    name:"",
    type:"",
    size: "",
    life_expectancy: "",
    fun_fact: "",
    image: ""
  })

  function handleChange(event){
    setFormInfo({...formInfo, [event.target.name]: event.target.value})
  }

  return(
    <div className="new-animal-form" onSubmit={(event)=> {
      event.preventDefault()
      handleSubmit(formInfo)}}>
      <h1>Add other Galapagos animals that you know!</h1>
     
      <form onSubmit={handleSubmit}>
       
          <input type="text" name="name" placeholder="Animal Name" onChange={handleChange} /><br></br>

          <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/><br></br>

          <select name="type" onChange={handleChange}>
            <option>Select a Category</option>
            <option value="Reptiles">Reptiles</option> 
            <option value="Birds">Birds</option>
            <option value="Fish">Fish</option>
            <option value="Mammal">Mammal</option>
          </select>
            <br></br>
          <input type="text" name="size" placeholder="Animal Size" onChange={handleChange}/><br></br>

          <input type="text" name="life_expectancy" placeholder="Animal Lifespan" onChange={handleChange}/><br></br>

          <input type="text" name="fun_fact" placeholder="Fun Fact" onChange={handleChange}/><br></br>
          <button type="submit">Add Animal</button>
      </form>
    </div>
  )
}

export default Form