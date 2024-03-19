import Modal from "@/components/Modal/page";
import PhotoCard from "@/components/photoCard/page";
import { PhotoDetailsType, photoDetails } from "@/constants/photoDetails";
import React from "react";
import style from "./page.module.css";

type PropsType = {
  params: {
    photoId: string;
  };
};

function PhotoWrapper(props: PropsType) {
  const { params } = props;
  const { photoId } = params;

  const photoDetail = photoDetails.find((item) => item.id === photoId);

  return (
    <Modal>
      <div className={style.main}>
        <img
          src={photoDetail?.img}
          alt="source-img"
          className={style.img_style}
        />
        <h1>{photoDetail?.name}</h1>
      </div>
    </Modal>
  );
}

export default PhotoWrapper;
