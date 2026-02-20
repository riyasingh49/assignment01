import React, { useState } from 'react'

const TempInput = ({label, value, onChange}) => {
    return(
        <div>
            <label>{label}</label>
            <input type = "number"value = {value} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

const TemperatureConverter = () => {
    const[celsius, setCelsius] = useState("");
    const [lastChanged, setLastChanged] = useState("");
    const fahrenheit = celsius !== ""? parseFloat(celsius) * 9/5 + 32 : "";
    const displayCelsius = lastChanged === "fahrenheit" && fahrenheit !== "" ? ((fahrenheit - 32)* 5/9).toFixed(2) : celsius;
    const handleCelsiusChange = (val) => {
        setCelsius(val);
        setLastChanged("celsius");
    }
    const handleFahrenheitChange = (val) => {
        if(val === "" || val === "-"){
            setCelsius("");
        }else{
            setCelsius(((parseFloat(val)-32) * 5/9));
        }
        setLastChanged("fahrenheit");
    }
  return (
    <div>
        <h1>Temperature Converter</h1>
        <TempInput label = "Celsius"  value = {displayCelsius} onChange = {handleCelsiusChange}/>
        <div>⇅</div>
        <TempInput label = "Fahrenheit"  value = {fahrenheit} onChange = {handleFahrenheitChange}/>
        
      
    </div>
  )
}

export default TemperatureConverter
