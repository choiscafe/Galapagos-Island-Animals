import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer ({ animals }){
  const animalInfo = animals.map(animal => {
    return <ListingCard key={animal.id} animal={animal}/>
  })

  return (
    <>
    <h1>Here are the animals:</h1>
    {animalInfo}
    </>
  )
}

export default ListingsContainer
