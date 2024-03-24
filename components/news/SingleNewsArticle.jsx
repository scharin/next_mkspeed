"use client";
import { MK_NAME } from "@/assets/constants";
import React from "react";
import NewsListSideMenu, { GetNewsWithId } from "./NewsList";
import SingleNewsObject from "./SingleNewsObject";

const SingleNewsArticle = ({ idParam, newsData }) => {
  React.useEffect(() => {
    document.title = `Nyheter ${idParam} - ${MK_NAME}`;
  }, []);

  const newsArticle = GetNewsWithId(newsData, idParam);
  return (
    <div className="col-md-9">
      {newsArticle != null ? (
        <>
          <SingleNewsObject newsObj={newsArticle} />
        </>
      ) : (
        <div className="article border rounded-1 p-2 m-1">
          404 - No news article with id {idParam}
        </div>
      )}
    </div>
  );
};

export default SingleNewsArticle;
