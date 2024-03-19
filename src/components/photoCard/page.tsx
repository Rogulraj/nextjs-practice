import React from "react";
import style from "./page.module.css";

import { PhotoDetailsType } from "../../constants/photoDetails";
import Image from "next/image";

type PropsType = {
  item: PhotoDetailsType;
  //   photoId: number;
};

function PhotoCard(props: PropsType) {
  const { item } = props;
  const { img, name } = item;

  return (
    <div className={style.main}>
      <img src={img} alt="source-img" className={style.img_style} />
      <p className={style.img_name_style}>{name}</p>
    </div>
  );
}

export default PhotoCard;
