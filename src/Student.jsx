
export default function Student({details}) {
    const h2 ="md:text-xl text-lg font-bold text-center my-1 uppercase text-slate-700";
    const {name,age,gender} = details;
  return (
    <div className="bg-slate-200 text-center w-6/12 mx-auto mb-5">
        {/* <h2 className={`${h2}`}>name : <span className="text-orange-700 capitalize ">{details.name}</span></h2>
        <h2 className={`${h2}`}>age : <span className="text-orange-700 capitalize">{details.age}</span></h2>
        <h2 className={`${h2}`}>gender : <span className="text-orange-700 capitalize">{details.gender}</span></h2> */}
        <h2 className={`${h2}`}>name : <span className="text-orange-700 capitalize ">{name}</span></h2>
        <h2 className={`${h2}`}>age : <span className="text-orange-700 capitalize">{age}</span></h2>
        <h2 className={`${h2}`}>gender : <span className="text-orange-700 capitalize">{gender}</span></h2>
    </div>
  )
}
