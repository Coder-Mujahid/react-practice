
export default function Event() {

    function click01(){
        alert('mujahid click1');
    }

    const click02=()=>{
        alert('mujahid click2');

    }
    const click04=(num)=>{
        alert(num+5);

    }
  return (
    <div className="flex items-center  w-full min-h-screen justify-center font-semibold">
        <button onClick={click01} className="px-5 py-2 bg-slate-500 rounded-lg mr-5">button01</button>
        <button onClick={click02} className="px-5 py-2 bg-slate-500 rounded-lg mr-5">button02</button>
        <button onClick={()=>{alert('mujahid click2')}} className="px-5 py-2 bg-slate-500 rounded-lg mr-5">button03</button>
        <button onClick={()=>click04(10)} className="px-5 py-2 bg-slate-500 rounded-lg mr-5">button02</button>
        
    </div>
  )
}
