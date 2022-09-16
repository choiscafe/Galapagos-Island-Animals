import galapagos from "../assets/galapagos.jpeg"

function Home (){

  return (
    <section>
      <div><img src={galapagos} className="galapagos" alt="galapagos" /></div>
      <div className="home-div">
        <h1 className="home-title">Welcome to <br></br>Galapagos Island Amimals</h1>
      </div>
    </section>
  )
}

export default Home