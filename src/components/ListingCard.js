import React, { useState } from "react"


function ListingCard({ animal }) {

  const [love, setLove] = useState(false)
  const [showFunFact, setShowFunFact] = useState(true)
  const { name, type, size, life_expectancy, fun_fact, image } = animal

  function handleLike(){
    setLove(!love)
  }

  function handleClick(){
    setShowFunFact(!showFunFact)
  }

  return (

    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Type: {type}</p>
      {love ? (
        <button className="primary" onClick={handleLike}>❤️ </button>
      ) : (
        <button onClick={handleLike}>♡</button>
      )}
    </li>
  )
    }

export default ListingCard