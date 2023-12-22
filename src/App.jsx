import './App.css'
import './Condition'
import Condition from './Condition';
import Call from './Call';
import Student from './Student';
import Event from './Event';
import Counter from './Counter';
import Players from './Players';
import Useeffect from './Useeffect';
import Restcountryapi from './Restcountry/Restcountryapi';
import DropdownButton from './DropdownButton';
import Abc from './Abc';
import LoadDataByCategory from './LoadDataByCategory';
import ParticleComponent from './ParticleComponent';

function App() {
  const h2 ='md:text-5xl text-2xl font-bold text-center py-5 uppercase text-slate-700';
  // const student=['nerob','mujahid','mahmudul','samim','sabbir','alamgir']

  const data=[
    {name:'nerob',age:'20',gender:'male'},
    {name:'mujahid',age:18,gender:'male'},
    {name:'mahmudul',age:18,gender:'male'},
    {name:'samim',age:18,gender:'male'},
    {name:'sabbir',age:18,gender:'male'},
    {name:'alamgir',age:18,gender:'male'}
  ]
  return (

    <>
      {/* <h2 className={`${h2}`}>conditional rendering prictice</h2>
      <Condition name="react" state={true} next="jsx"></Condition>
      <Condition name="react" state={false} next="jsx"></Condition>
      <Condition name="react" state={true} next="jsx"></Condition>
      <Condition name="react" state={false} next="jsx"></Condition>
      <Condition name="react" state={true} next="jsx"></Condition> */}

      {/* <h2 className={`${h2}`}>array calling</h2>
      <Call name="mujahid"></Call>
      {
        student.map(data =><Call name={data}> </Call>)
      } */}
      {/* <h2 className={`${h2}`}>array ob object calling</h2>
      {
        data.map(data =><Student details={data}></Student>)
      } */}

      {/* <Event></Event> */}

      {/* <Counter></Counter> */}


      {/* <Players></Players> */}

      {/* <Useeffect></Useeffect> */}




      {/* <Restcountryapi></Restcountryapi> */}



      {/* <DropdownButton></DropdownButton> */}



      {/* <Abc></Abc> */}



      <div className="app-container">
      <h1>Your React Particle Background App</h1>
      <ParticleComponent />
    </div>

    </>
  )
}

export default App
