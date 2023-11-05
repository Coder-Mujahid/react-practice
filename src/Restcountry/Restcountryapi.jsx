import { useEffect, useState } from "react";
import Restapidata from "./Restapidata";




export default function Restcountryapi() {

    const [country, setcountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setcountry(data))
    }, [])
  return (
    <div>
        <div className="md:grid grid-cols-2 lg:grid-cols-3 w-11/12 gap-3 mx-auto p-5 bg-gradient-to-r from-cyan-50 to-blue-300">
        {
            country.map(country => <Restapidata key={country.ccn3} country={country}></Restapidata>)
        }
        </div>
    </div>
  )
}

