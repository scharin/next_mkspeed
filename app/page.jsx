import newsData from "@/assets/newsarticles.json";
import Image from "next/image";
import React from "react";
import NewsListSideMenu, { SortNewsList } from "@/components/news/NewsList";
import { MK_NAME } from "@/assets/constants";
import RaceList from "@/components/races/RaceList";
import MultipleNewsArticle from "@/components/news/MultipleNewsArticle";

export const metadata = {
  title: `Hem - ${MK_NAME}`,
};

const HomePage = () => {
  const sortedNewsPosts = SortNewsList(newsData).slice(0, 5);

  return (
    <div className="row">
      <MultipleNewsArticle newsData={sortedNewsPosts} />
      <div className="news-list col-md-3 ">
        <RaceList />
        <NewsListSideMenu newsPosts={sortedNewsPosts} />
      </div>
    </div>
  );
};

export default HomePage;
