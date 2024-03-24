import Link from "next/link";
import React from "react";

const NewsListSideMenu = ({ newsPosts, selectedPostId = "" }) => {
  return (
    <ul className="list-group">
      <li className="list-group-item p-1 fs-5 fw-bold text-center">Nyheter</li>
      {newsPosts.map((newsPost) => {
        return (
          <li
            key={newsPost.id}
            className={`list-group-item p-0 ps-2 fs-6 text-truncate ${
              newsPost.id == selectedPostId ? "current" : ""
            }`}
          >
            <Link
              href={`/news/?id=${newsPost.id}`}
            >{`${newsPost.date}: ${newsPost.header}`}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsListSideMenu;

export function SortNewsList(newsList) {
  return newsList.sort(function (a, b) {
    return b.id - a.id;
  });
}

export function GetNewsWithId(newsList, id) {
  return newsList.find((news) => news.id == id);
}
