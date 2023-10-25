import { useState } from "react";

export default function Restapidata({country}) {
    const {name,capital,region,flags}=country;

    const {visit,setvisit}=useState(true)

  const Click=()=>{
    alert('button has clicked')
  }

  return (
    <div className="card p-5 w-full rounded-xl mb-3 bg-base-100 flex flex-col items-center justify-between  shadow-xl shadow-gray-700 bg-gradient-to-r from-slate-300 to-slate-50">
      <figure className="md:h-56 h-36 w-full">
        <img
          src={flags.png}
          alt="Shoes"
          className="rounded-xl w-full h-full"/>
      </figure>
      <div className="card-body items-center text-center flex flex-col gap-2">
        <h2 className="text-2xl font-bold capitalize text-pink-600">{name.common}</h2>
        <p className="text-xl font-semibold capitalize">region : {region}</p>
        <p className="text-xl font-semibold capitalize">capital : {capital} </p>
        <div className="card-actions w-full">
          <button onClick={()=>Click()} className="bg-cyan-300 py-2 px-10 text-base rounded-lg font-semibold">see more details</button>
        </div>
      </div>
    </div>
  );
}
