import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevPage) => {
      if (prevPage >= lastPage) {
        return prevPage;
      }

      return prevPage + 1;
    });
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => {
      if (prevPage <= 1) {
        return prevPage;
      }

      return prevPage - 1;
    });
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-white text-xl">
      <button
        onClick={handlePrevPage}
        className="transition-all hover:text-purple-300"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all hover:text-purple-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
