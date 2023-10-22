import './App.css'
import './Condition'
import Condition from './Condition';
import Call from './Call';

function App() {
  const h2 ='md:text-5xl text-2xl font-bold text-center py-5 uppercase text-slate-700';
  const student=['nerob','mujahid','mahmudul','samim','sabbir','alamgir']
  return (

    <>
      {/* <h2 className={`${h2}`}>conditional rendering prictice</h2>
      <Condition name="react" state={true} next="jsx"></Condition>
      <Condition name="react" state={false} next="jsx"></Condition>
      <Condition name="react" state={true} next="jsx"></Condition>
      <Condition name="react" state={false} next="jsx"></Condition>
      <Condition name="react" state={true} next="jsx"></Condition> */}

      <h2 className={`${h2}`}>conditional rendering prictice</h2>
      <Call name="mujahid"></Call>
      {
        student.map(data =><Call name={data}> </Call>)
      }
    </>
  )
}

export default App
