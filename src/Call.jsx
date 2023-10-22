
export default function Call({name}) {
    
  const h2 ="md:text-xl text-lg font-bold text-center py-5 uppercase text-slate-700";

  return (
    <div className="bg-slate-200 text-center w-6/12 mx-auto mb-5">
        <h2 className={`${h2}`}>name : <span className="text-orange-700 capitalize">{name}</span></h2>
    </div>
  )
}
