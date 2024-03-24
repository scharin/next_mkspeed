import Image from "next/image";
import header from "@/assets/images/header.png";
import Folkracestart from "@/assets/images/Folkracestart.jpg";
import React from "react";
import NewsList from "@/components/navigation/NewsList";

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="article border rounded-1 p-2 m-1">
          <Image
            className="article-img"
            src={header}
            alt=""
            width={0}
            height={0}
            sizes="(max-width: 400px) 1vw, 90vw"
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
            unoptimized
          />
          <p>
            Laorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            eius magni odit excepturi magnam sit voluptatem velit esse
            repudiandae, numquam molestias fugit? Reprehenderit delectus velit
            consectetur recusandae omnis laborum, architecto quam neque maiores!
            Totam iste pariatur, non excepturi blanditiis asperiores cumque
            harum deleniti, temporibus aliquam nam nisi tenetur laborum eveniet
            vitae sed enim accusantium sit aut quidem atque facilis beatae?
          </p>
          <div className="article-date">
            <span className="post-date">2024-03-04 23:12</span>
          </div>
        </div>

        <div className="article border rounded-1 p-2 m-1">
          <Image
            className="article-img"
            src={Folkracestart}
            alt=""
            width={0}
            height={0}
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
            unoptimized
          />
          <p>
            Laorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            eius magni odit excepturi magnam sit voluptatem velit esse
            repudiandae, numquam molestias fugit? Reprehenderit delectus velit
            consectetur recusandae omnis laborum, architecto quam neque maiores!
            Totam iste pariatur, non excepturi blanditiis asperiores cumque
            harum deleniti, temporibus aliquam nam nisi tenetur laborum eveniet
            vitae sed enim accusantium sit aut quidem atque facilis beatae?
          </p>
          <div className="article-date">
            <span className="post-date">2024-03-04 23:12</span>
          </div>
        </div>
      </div>
      <NewsList />
    </div>
  );
};
export default HomePage;
