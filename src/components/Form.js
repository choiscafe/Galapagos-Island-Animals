function Form ({ handleSubmit, handleChange, formInfo }){

  return(
    <div>
      <h1>Form to add a new animal:</h1>
      <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formInfo.name} onChange={handleChange} />
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Form