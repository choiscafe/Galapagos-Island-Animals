import React, { useState } from "react"

function ListingCard({ animal }) {

  const [love, setLove] = useState(false)
  const [showFunFact, setShowFunFact] = useState(false)
  const { name, type, size, life_expectancy, fun_fact, image } = animal

  function handleLike(){
    setLove(!love)
  }

  function handleClick(){
    setShowFunFact(!showFunFact)
  }

  return (

    <ul className="card">
      <h2>{name}</h2>
      
      {love ? (
        <button className="primary" onClick={handleLike}>❤️</button>
      ) : (
        <button onClick={handleLike}>♡</button>
      )}
      {showFunFact ? null : <img className="anchorLink" src={image} alt={"Animal Image"} onClick={handleClick}/>}
      {showFunFact ? <><h3 onClick={handleClick}><strong>Fun Fact:</strong> <br></br>{fun_fact} </h3><br></br>
      <h3><strong>Size: </strong>{size}</h3></> : null }
      <br></br>
      <h3><strong>Type: </strong>{type}</h3>
      <br></br>
      <h3><strong>Lifespan:</strong> {life_expectancy}</h3>
      <br></br>
      
    </ul>
  )
    }

export default ListingCard