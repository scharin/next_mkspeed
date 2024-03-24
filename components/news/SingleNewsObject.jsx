import Image from "next/image";
import React from "react";

const SingleNewsObject = ({ newsObj }) => {
  return (
    <div key={newsObj.id} className="article border rounded-1 p-2 m-1">
      <h2 className="text-center text-decoration-underline">
        {newsObj.header}
      </h2>
      {newsObj.hasOwnProperty("imgUrl") && (
        <Image
          className="article-img"
          src={`/images/news/${newsObj.imgUrl}`}
          alt=""
          width={0}
          height={0}
          style={{
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
          unoptimized
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: newsObj.formattedText }}></div>
      <div className="article-date">
        <span className="post-date">{newsObj.date}</span>
      </div>
    </div>
  );
};

export default SingleNewsObject;
