const Paginate = ({ page, setPage }) => {
  return (
    <div>
      {page === 1 || page === 10 ? (
        <div>
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
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};

export default Paginate;
