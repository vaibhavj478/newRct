import React from "react";
import { Link } from "react-router-dom";

const FooCol = ({ id, head, colArr }) => {
  // console.log(head,colArr);

  return (
    <>
      <h2>{head}</h2>

      {colArr.map((el, ind) => {
        return (
          <div key={id + ind + 1}>
            <Link to={`${el.url}`}>{el.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default FooCol;
