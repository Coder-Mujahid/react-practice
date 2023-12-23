import { useEffect, useState } from "react";



const ItemsPerPage = 10;

const PaginatedData = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [data,setdata] = useState([])

  useEffect(() => {
    fetch("../public/Data.json") // Use an absolute path or relative path to the public folder
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  // Function to filter data based on designation
  const filterDataByDesignation = (designation) => {
    return data.filter((item) => item.designation === designation);
  };

  // Function to get data for the current page
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ItemsPerPage;
    const endIndex = startIndex + ItemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  // Event handler for next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Event handler for previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const designationToDisplay = "Engineer"; // Change this based on your requirement
  const filteredData = filterDataByDesignation(designationToDisplay);
  const totalPages = Math.ceil(filteredData.length / ItemsPerPage);
  const currentPageData = getCurrentPageData();

  return (
    <div>
      <h1>{`Page ${currentPage} of ${totalPages}`}</h1>

      {currentPageData.map((item) => (
        <div key={item.id}>
          <div className=" flex flex-col items-center bg-slate-200 rounded-lg p-3 shadow-inner text-lg font-semibold ">
            <li key={item.id}>{item.name}</li>
            <li key={item.id}>{item.technology}</li>
            <li key={item.id}>{item.email}</li>
            <li key={item.id}>{item.phone}</li>
          </div>
        </div>
      ))}

      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
    </div>
  );
};

export default PaginatedData;
