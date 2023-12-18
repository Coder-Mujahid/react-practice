import { useState, useEffect } from "react";

const LoadDataByCategory = () => {
  const [teachers, setTeachers] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [Ftechnology, setFTechnology] = useState([]);

//   data fatching system 01 ----------------------------------------------
//   useEffect(() => {
//     // Fetch the teacher data from the public folder
//     const fetchData = async () => {
//       try {
//         const response = await fetch("../public/Data.json");
//         const data = await response.json();
//         setTeachers(data);
//       } catch (error) {
//         console.error("Error fetching teacher data:", error);
//       }
//     };

//     fetchData();
//   }, []);
// --------------------------------------------------------------------

//   data fatching system 02 ----------------------------------------------
useEffect(() => {
    fetch("../public/Data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched Data:', data);
        setTeachers(data);
      })
      .catch((error) => console.error('Error fetching teacher data:', error));
  }, []);
// ----------------------------------------------------------------------

  useEffect(() => {
    // Filter teachers in the 'computer' category
    const computerTeachers = teachers.filter(
      (teacher) => teacher.technology === "computer"
    );
    setTechnology(computerTeachers);
  }, [teachers]);

  useEffect(() => {
    // Filter teachers in the 'computer' category
    const fooodTeachers = teachers.filter(
      (teacher) => teacher.technology === "food"
    );
    setFTechnology(fooodTeachers);
  }, [teachers]);


  return (
    <div>
      <h2>List of Computer Teachers</h2>

      <ul className=" grid grid-cols-4 gap-4 mb-10">
        {technology.map((teacher) => (
          <>
            <div className=" flex flex-col items-center bg-slate-200 rounded-lg p-3 shadow-inner text-lg font-semibold ">
            <li key={teacher.id}>{teacher.name}</li>
            <li key={teacher.id}>{teacher.technology}</li>
            <li key={teacher.id}>{teacher.email}</li>
            <li key={teacher.id}>{teacher.phone}</li>
            </div>  
          </>
        ))}
      </ul>
      <h2>List of food Teachers</h2>

      <ul className=" grid grid-cols-4 gap-4">
        {Ftechnology.map((teacher) => (
          <>
            <div className=" flex flex-col items-center bg-slate-200 rounded-lg p-3 shadow-inner text-lg font-semibold ">
            <li key={teacher.id}>{teacher.name}</li>
            <li key={teacher.id}>{teacher.technology}</li>
            <li key={teacher.id}>{teacher.email}</li>
            <li key={teacher.id}>{teacher.phone}</li>
            </div>  
          </>
        ))}
      </ul>
    </div>
  );
};

export default LoadDataByCategory;
