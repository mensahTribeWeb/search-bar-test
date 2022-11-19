import React from "react";
import SportsBarIcon from '@mui/icons-material/SportsBar';

export default function Query({placeholder, data}) {

    // functions

  //input field value change
  const handleChange = (e) => {
  
    
      

}

//Handle the submit of the query

const handleSubmit = (e) => {
  e.preventDefault()
  console.log();
} 
  return(
    <form className="query" onSubmit={handleSubmit}>
      <h1>Home Brew</h1>
      <div className="queryInputs">
        <input 
          placeholder = {placeholder} 
           type="text"
          // value={} 
          onChange={handleChange}
          />
        <div type='submit' className="queryIcon">
          <SportsBarIcon /> 
        </div>
      </div>
      <div className="dataResults">
        {/* {data.map((value, key) =>{return < href="value.body.mode.raw" className="dataItem">{value.name}})} */}
      </div>

  </form>  
  )
}