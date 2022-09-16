import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer ({ animals }){
  const animalInfo = animals.map(animal => {
    return <ListingCard key={animal.id} animal={animal}/>
  })

  return (
    <ul className="cards">
    {animalInfo}
    </ul>
  )
}

export default ListingsContainer
