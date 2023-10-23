import { useState } from "react"

export default function Counter() {
    const [data,setdata]=useState(0)

    function increment(){
        setdata(data+1)
    }
    function decrement(){
        setdata(data-1)
    }

  return (
    <div className="flex items-center flex-col gap-5  w-full min-h-screen justify-center font-semibold">
        <h2 className="text-3xl font-bold uppercase">counter : <span className="text-red-700">{data}</span> </h2>
        <div>
        <button onClick={increment} className="px-5 py-2 bg-slate-500 rounded-lg mr-5">increment</button>
        <button onClick={decrement} className="px-5 py-2 bg-slate-500 rounded-lg mr-5">decrement</button>
        </div>
    </div>
  )
}
