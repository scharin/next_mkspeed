"use client";
import newsData from "@/assets/newsarticles.json";
import NewsListSideMenu, { SortNewsList } from "@/components/news/NewsList";
import MultipleNewsArticle from "@/components/news/MultipleNewsArticle";
import SingleNewsArticle from "@/components/news/SingleNewsArticle";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const NewsPage = () => {
  return (
    <Suspense>
      <SuspendedNewsPage />
    </Suspense>
  );
};

function SuspendedNewsPage() {
  const searchParam = useSearchParams();
  const idParam = searchParam.get("id");
  const sortedList = SortNewsList(newsData).slice(0, 20);

  return (
    <div className="row">
      {idParam == null ? (
        <>
          <MultipleNewsArticle newsData={sortedList} />
          <div className="news-list col-md-3">
            <NewsListSideMenu newsPosts={sortedList} />
          </div>
        </>
      ) : (
        <>
          <SingleNewsArticle idParam={idParam} newsData={newsData} />
          <div className="news-list col-md-3">
            <NewsListSideMenu newsPosts={sortedList} selectedPostId={idParam} />
          </div>
        </>
      )}
    </div>
  );
}

export default NewsPage;
