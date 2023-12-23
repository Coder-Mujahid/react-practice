import { useEffect, useState } from "react";
import './App.css'

const ItemsPerPage = 10;

const PaginatedDatawithmodal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data); // Add this line
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to filter data based on designation
  const filterDataByDesignation = (designation) => {
    return data.filter((item) => item.technology === designation);
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

  // Event handler to open the modal
  const openModal = (item) => {
    setModalData(item);
    console.log(item)
  };

  // Event handler to close the modal
  const closeModal = () => {
    setModalData(null);
  };

  const designationToDisplay = "computer"; // Change this based on your requirement
  const filteredData = filterDataByDesignation(designationToDisplay);
  const totalPages = Math.ceil(filteredData.length / ItemsPerPage);
  const currentPageData = getCurrentPageData();

  return (
    <div>
      <h1>{`Page ${currentPage} of ${totalPages}`}</h1>

      {currentPageData.map((item) => (
        <div key={item._id}>
          <div className="flex flex-col items-center bg-slate-200 rounded-lg p-3 shadow-inner text-lg font-semibold">
            <li>{item.name}</li>
            <li>{item.technology}</li>
            <li>{item.email}</li>
            <li>{item.phone}</li>
            <button className=" bg-lime-300 p-2 my-5 rounded-lg" onClick={() => openModal(item)}>View Details</button>
          </div>
        </div>
      ))}

      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>

      {modalData && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <h2>{modalData.name}s Details</h2>
      <p>Email: {modalData.email}</p>
      <p>Phone: {modalData.phone}</p>
    </div>
  </div>
)}
    </div>
  );
};

export default PaginatedDatawithmodal;
