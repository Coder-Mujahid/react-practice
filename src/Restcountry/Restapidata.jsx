export default function Restapidata({country}) {
    console.log(country);
    const {name,capital,region,flags}=country;


  return (
    <div className="card p-5 w-full rounded-xl bg-base-100 flex flex-col items-center  shadow-xl shadow-gray-700 bg-gradient-to-r from-slate-50 to-slate-300">
      <figure className="">
        <img
          src={flags.png}
          alt="Shoes"
          className="rounded-xl min-w-full"/>
      </figure>
      <div className="card-body items-center text-center flex flex-col gap-2">
        <h2 className="card-title">{name.common}</h2>
        <p>region : {region}</p>
        <p>capital : {capital} </p>
        <div className="card-actions w-full">
          <button className="bg-cyan-300 py-2 px-10 text-base rounded-lg font-semibold">see more details</button>
        </div>
      </div>
    </div>
  );
}
