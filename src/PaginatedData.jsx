import React, { useEffect, useState } from "react";

const ItemsPerPage = 6;

const PaginatedData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Assuming your data is stored in a file named Data.json in the public folder
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to get data for the current page
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ItemsPerPage;
    const endIndex = startIndex + ItemsPerPage;
    return data.slice(startIndex, endIndex);
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

  const totalPages = Math.ceil(data.length / ItemsPerPage);
  const currentPageData = getCurrentPageData();

  return (
    <div className=" p-3">
    <h2 className=" text-2xl text-black text-center mb-2">pagination</h2>
    <h2 className=" text-2xl text-black text-center mb-2">{`Page ${currentPage} of ${totalPages}`}</h2>

      <div className=" grid grid-cols-4 gap-4 mb-10">
        {currentPageData.map((item) => (
          <div key={item._id}>
            <div className="flex flex-col items-center bg-slate-200 rounded-lg p-3 shadow-inner text-lg font-semibold">
              <li key={item._id}>{item.name}</li>
              <li key={item._id}>{item.technology}</li>
              <li key={item._id}>{item.email}</li>
              <li key={item._id}>{item.phone}</li>
            </div>
          </div>
        ))}
      </div>

      <div className=" w-8/12 mx-auto flex gap-5 items-center justify-center ">
        <button
          className=" bg-lime-300 p-2 my-5 rounded-lg"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          className=" bg-lime-300 p-2 my-5 rounded-lg"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginatedData;
