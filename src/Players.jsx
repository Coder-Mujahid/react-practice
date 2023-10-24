import { useState } from "react"

export default function Players() {
    const [member,setmember]=useState(11)

    function increment(){
        setmember(member+1)
    }
    function decrement(){
        setmember(member-1)
    }

  return (
    <div className="flex items-center flex-col gap-5  w-full min-h-screen justify-center font-semibold">
        <h2 className="text-3xl font-bold uppercase">team player : <span className="text-red-700">{member}</span> </h2>
        <div>
        <button onClick={increment} className="px-5 py-2 bg-slate-500 rounded-lg mr-5 text-white ">add member</button>
        <button onClick={decrement} className="px-5 py-2 bg-slate-500 rounded-lg mr-5 text-white ">remove member</button>
        </div>
    </div>
  )
}
