import { useRef } from 'react';

export default function CounterAlart() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
   <div className=' w-full flex h-screen items-center justify-center'>
   
     <button className='w-auto bg-right-bottom bg-lime-300 px-4 py-2 rounded-md font-semibold hover:scale-105 ease-in-out duration-200 hover:text-white hover:bg-lime-700' onClick={handleClick}>
      Click me!
    </button>
   </div>
  );
}
