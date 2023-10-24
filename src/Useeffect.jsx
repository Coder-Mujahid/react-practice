import { useEffect, useState } from "react";
import APIdata from "./APIdata";

export default function Useeffect() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(data =>setuser(data))
  }, []);

  return (
    <div className="flex items-center flex-col gap-5  w-full min-h-screen justify-center font-semibold">
            <h2 className="text-xl font-semibold uppercase">use api data with react</h2>
            <div className="w-11/12 mx-auto grid grid-cols-4 gap-3 ">
            {
                user.map(data =><APIdata single={data}></APIdata>)
            }
            </div>
    </div>
  )
}
