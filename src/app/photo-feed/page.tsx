import React from "react";
import style from "./page.module.css";
import { photoDetails } from "../../constants/photoDetails";
import PhotoCard from "@/components/photoCard/page";
import Link from "next/link";

function PhotoFeed() {
  return (
    <div className={style.main}>
      <h1 className={style.main_title}>PhotoFeed</h1>
      <div className={style.image_card}>
        {photoDetails.map((item, _index) => (
          <Link href={`/photo-feed/${item.id}`} key={_index}>
            <PhotoCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhotoFeed;
