import { useState } from "react";

const usePagination = ({ inArr }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [txPerPage] = useState(10);
  const lastTxId = currentPage * txPerPage;
  const firstTxId = lastTxId - txPerPage;
  const currentTx = [...inArr].reverse().slice(firstTxId, lastTxId);
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(inArr.length / txPerPage); i++) {
    pageNum.push(i);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pages = pageNum.map((page) => (
    <p
      onClick={() => paginate(page)}
      key={page}
      className="font-semibold text-xl m-2 text-center md:hover:text-pink-400 text-black"
    >
      {page}
    </p>
  ));
  const [dots, setDots] = useState(false);
  const hadleChangeDots = () => setDots(!dots);
  const pagesFirst = pages.slice(0, 1);
  const pagesLast = pages.slice(pages.length - 1);

  const nextPage = () => {
    if (currentPage > 0 && currentPage < +pagesLast[0].key)
      setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1 && currentPage <= +pagesLast[0].key)
      setCurrentPage(currentPage - 1);
  };

  const pagPages = (() => {
    return pages.length > 6 ? (
      <div className="flex justify-center text-xl ">
        <button onClick={nextPage} className="w-6">
          right
        </button>
        <div onClick={hadleChangeDots}>{pagesFirst}</div>
        {currentPage === 1 || currentPage === pageNum.length ? (
          <span className="font-semibold m-2" onClick={hadleChangeDots}>
            {dots ? (
              <p className="flex -m-2 ">{pages.slice(1, pages.length - 1)}</p>
            ) : (
              <p className="md:hover:text-pink-400">...</p>
            )}
          </span>
        ) : (
          <>
            <span className="font-semibold m-2" onClick={hadleChangeDots}>
              {dots ? (
                <p className="flex -m-2 ">{pages.slice(1, pages.length - 1)}</p>
              ) : (
                <p className="md:hover:text-pink-400 text-black">
                  ... {currentPage} ...
                </p>
              )}
            </span>
          </>
        )}
        <div onClick={hadleChangeDots}>{pagesLast}</div>
        <button onClick={prevPage} className="w-6">
          left
        </button>
      </div>
    ) : (
      pages
    );
  })();

  return { currentTx, pagPages };
};

export default usePagination;
