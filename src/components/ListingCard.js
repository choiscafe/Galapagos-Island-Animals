import React from "react"


function ListingCard({ animal }) {
  return (
    <div>
      <h1>Animal Name: {animal.name}</h1>
      <h2>This animal is {animal.cute ? "super cute" : "just normal looking"}</h2> 
    </div>
  )
    }

export default ListingCard