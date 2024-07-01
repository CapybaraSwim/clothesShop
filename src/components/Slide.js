import React from "react";
import SlideImage from "./SlideImage";

import "../index.scss";

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide">
      <SlideImage src={url} alt={title} />
      <div className="slide-title">{title}</div>
    </div>
  );
}