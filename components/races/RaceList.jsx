import React from "react";

const RaceList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item p-1 fs-5 fw-bold text-center">
        Tävlingar
      </li>
      <li className="list-group-item p-0 ps-2 fs-6 hvr-grow">
        2024-03-04: Tävling 1.
      </li>
      <li className="list-group-item p-0 ps-2 fs-6 hvr-grow">
        2024-03-04: Tävling 2.
      </li>
      <li className="list-group-item p-0 ps-2 fs-6">2024-03-04: Tävling 3.</li>
    </ul>
  );
};

export default RaceList;
