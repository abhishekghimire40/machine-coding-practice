// paginate function to show first,prev, current,next,last pagination
const Paginate = ({ page, pageHandler, products }) => {
  return (
    <div className="pagination">
      {page > 1 && <span onClick={() => pageHandler(1)}>First</span>}

      {page > 2 && (
        <span onClick={() => pageHandler(page - 1)}>{page - 1}</span>
      )}
      <span className="active" onClick={() => pageHandler(page)}>
        {page}
      </span>
      {page < 9 && (
        <span onClick={() => pageHandler(page + 1)}>{page + 1}</span>
      )}

      {page < 10 && (
        <span onClick={() => pageHandler(products.length)}>Last</span>
      )}
    </div>
  );
};

// pagination to show all Prev, all pages...(1,2,3,4,5,6,7,8,9,10),Next
// const Paginate = ({ page, pageHandler, products }) => {
//   return (
//     <div className="pagination">
//       {page > 1 && <span onClick={() => pageHandler(page - 1)}>Prev</span>}
//       {[...Array(products.length)].map((_, i) => {
//         return (
//           <span
//             className={page === i + 1 ? "active" : ""}
//             onClick={() => pageHandler(i + 1)}
//             key={i}
//           >
//             {" "}
//             {i + 1}{" "}
//           </span>
//         );
//       })}
//       {page < 10 && <span onClick={() => pageHandler(page + 1)}>Next</span>}
//     </div>
//   );
// };

export default Paginate;

/**
 {page === 1 || page === 10 ? (
        <>
          <button
            id={1}
            onClick={() => {
              setPage(1);
            }}
          >
            {page === 1 ? 1 : "First"}
          </button>
          <button
            id={page}
            onClick={() => {
              setPage(page === 1 ? page + 1 : page - 1);
            }}
          >
            {page === 1 ? page + 1 : page - 1}
          </button>
          <button id={10} onClick={() => setPage(10)}>
            {page == 10 ? 10 : "last"}
          </button>
        </>
      ) : (
        <>
          <button
            id={1}
            onClick={() => {
              setPage(1);
            }}
          >
            First
          </button>
          {page > 2 && (
            <button
              id={page - 1}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              {page - 1}
            </button>
          )}
          <button
            id={page}
            onClick={() => {
              setPage(page);
            }}
          >
            {page}
          </button>
          {page < 8 && (
            <button
              id={page + 1}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              {page + 1}
            </button>
          )}
          <button
            id={10}
            onClick={() => {
              setPage(10);
            }}
          >
            Last
          </button>
        </>
      )}
 */
