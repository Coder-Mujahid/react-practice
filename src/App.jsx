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



      <DropdownButton></DropdownButton>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, at delectus vel, possimus nam minima natus quisquam quasi quia accusamus porro pariatur ab, eius fuga sequi in doloremque neque similique a optio est maxime. Optio voluptates possimus magni ipsum dignissimos, cupiditate repellendus, est sit, nulla asperiores iste modi omnis. Amet consectetur maxime ab, at voluptas dolorum aliquam eos asperiores similique consequuntur repudiandae, nostrum expedita quaerat? Error, corrupti dolore dolor dignissimos porro praesentium amet mollitia esse ratione architecto rem asperiores nisi, eaque est ea maiores! Est, voluptates fuga animi praesentium reiciendis dolorum tempora dicta rerum optio, esse, saepe culpa sequi voluptate!</h2>

    </>
  )
}

export default App
