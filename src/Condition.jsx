// conditional rendering 01

// export default function Condition({ name, state, next }) {
//   const h2 =
//     "md:text-xl text-lg font-bold text-center py-5 uppercase text-slate-700";

//   if (state === true) {
//     return (
//       <div className="bg-slate-200 text-center w-6/12 mx-auto">
//         <h2 className={`${h2}`}>course name : {name}</h2>
//         <h2 className={`${h2}`}>Now learn : {next}</h2>
//       </div>
//     );
//   }
//   else
//     return(
//        <>
//          <h2 className={`${h2}`}>course name : {name}</h2>
//         <h2 className={`${h2}`}>continue learn : {name}</h2>

//        </>
//     )

// }

// conditional rendering 02
// export default function Condition({ name, state, next }) {
//     const h2 =
//       "md:text-xl text-lg font-bold text-center py-5 uppercase text-slate-700";

//     if (state) {
//       return (
//         <div className="bg-slate-200 text-center w-6/12 mx-auto mb-5">
//           <h2 className={`${h2}`}>course name : {name}</h2>
//           <h2 className={`${h2}`}>Now learn : {next}</h2>
//         </div>
//       );
//     }
//       return(
//          <div className="bg-slate-300 text-center w-6/12 mx-auto mb-5">
//             <h2 className={`${h2}`}>course name : {name}</h2>
//           <h2 className={`${h2}`}>continue learn : {name}</h2>
//          </div>
//       )

//   }

// conditional rendering 03 with ternary oparetor (most use conditional rendering)
// export default function Condition({ name, state }) {
//     const h2 =
//       "md:text-xl text-lg font-bold text-center py-5 uppercase text-slate-700";

//       return(
//          <div className="bg-slate-300 text-center w-6/12 mx-auto mb-5">
//             <h2 className={`${h2}`}> {state ? 'Finshed learn': 'continue learn'}:{name}</h2>
//          </div>
//       )

//   }

// conditional rendering 04 with && -----jodi condition true hoi
// export default function Condition({ name, state }) {
//     const h2 ="md:text-xl text-lg font-bold text-center py-5 uppercase text-slate-700";

//       return(
//          <div className="bg-slate-300 text-center w-6/12 mx-auto mb-5">
//             <h2 className={`${h2}`}>{name} {state && '- complitly leran'}</h2>
//          </div>
//       )

//   }

// conditional rendering 05 with || -----jodi condition true hoi
// export default function Condition({ name, state }) {
//     const h2 ="md:text-xl text-lg font-bold text-center py-5 uppercase text-slate-700";

//       return(
//          <div className="bg-slate-300 text-center w-6/12 mx-auto mb-5">
//             <h2 className={`${h2}`}>{state || 'contineu leran -'} {name}</h2>
//          </div>
//       )

//   }

// conditional rendering 06 with variable
export default function Condition({ name, state, next }) {
  const h2 ="md:text-xl text-lg font-bold text-center py-5 uppercase text-slate-700";

  let data;

  if (state) {
    data = (
      <div className="bg-slate-200 text-center w-6/12 mx-auto mb-5">
        <h2 className={`${h2}`}>course name : {name}</h2>
        <h2 className={`${h2}`}>Now learn : {next}</h2>
      </div>
    );
  } 
    else {
    data = (
      <div className="bg-slate-300 text-center w-6/12 mx-auto mb-5">
        <h2 className={`${h2}`}>course name : {name}</h2>
        <h2 className={`${h2}`}>continue learn : {name}</h2>
      </div>
    );
  }

  return data;
}
