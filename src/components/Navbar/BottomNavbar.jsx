import React from "react";

const BottomNavbar = () => {
  const navBarCategoryName = [
    "Clearance",
    "woman",
    "men",
    "kids",
    "shoes",
    "activewear",
    "bags & accessories",
    "home",
    "beauty",
    "gifts",
    "flash events",
  ];

  return (
    <>
      <div>
        <div style={{ width: "90%" }}>
          {navBarCategoryName.map((el) => {
            return <div key={ Math.floor( Math.random()*100000)}  >{el}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
