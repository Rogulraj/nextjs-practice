import PhotoCard from "@/components/photoCard/page";
import { PhotoDetailsType, photoDetails } from "@/constants/photoDetails";
import React from "react";

type PropsType = {
  params: {
    photoId: string;
  };
};

function PhotoParamsWrapper(props: PropsType) {
  const { params } = props;
  const { photoId } = params;

  const photoDetail = photoDetails.find((item) => item.id === photoId);

  return (
    <div>{photoDetail !== undefined && <PhotoCard item={photoDetail} />}</div>
  );
}

export default PhotoParamsWrapper;
