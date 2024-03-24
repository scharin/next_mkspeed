import Link from "next/link";
import React from "react";

const NewsList = () => {
  return (
    <div className="news-list col-md-3 ">
      <ul className="list-group">
        <li className="list-group-item p-1 fs-5 fw-bold text-center">
          Tävlingar
        </li>
        <li className="list-group-item p-0 ps-2 fs-6 hvr-grow current">
          <Link
            href="#"
            className=""
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            2024-03-04: Tävling 1 - selectad.
          </Link>
        </li>
        <li className="list-group-item p-0 ps-2 fs-6 hvr-grow">
          2024-03-04: Tävling 2.
        </li>
        <li className="list-group-item p-0 ps-2 fs-6">
          2024-03-04: Tävling 3.
        </li>
        <li className="list-group-item p-1 fs-5 fw-bold text-center">
          Nyheter
        </li>
        <li className="list-group-item p-0 ps-2 fs-6">2024-03-04: Nyhet 1.</li>
        <li className="list-group-item p-0 ps-2 fs-6">2024-03-04: Nyhet 2.</li>
        <li className="list-group-item p-0 ps-2 fs-6">2024-03-04: Nyhet 3.</li>
        <li className="list-group-item p-0 ps-2 fs-6">2024-03-04: Nyhet 4.</li>
      </ul>
    </div>
  );
};

export default NewsList;
