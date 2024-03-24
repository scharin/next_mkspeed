import React from "react";
import SingleNewsObject from "./SingleNewsObject";
import Link from "next/link";

const MultipleNewsArticle = ({ newsData }) => {
  return (
    <div className="col-md-9">
      {newsData.map((newsPost) => {
        return (
          <div key={newsPost.id}>
            <Link
              href={`/news/?id=${newsPost.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <SingleNewsObject newsObj={newsPost} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleNewsArticle;
