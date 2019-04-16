import React from "react";
import "./Paginator.css";

const Paginator = item => {
  const { offset, fetch, size, onMore, onLess } = item;
  return (
    <div class="Paginator">
      <button
        disabled={offset > 0 ? false : true}
        onClick={onLess}
        class="less input"
      >
        {"<"}
      </button>
      <button
        disabled={offset < size - 1 - fetch ? false : true}
        onClick={onMore}
        class="more input"
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginator;
