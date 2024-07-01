import React from "react";

import "../index.scss";

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className="slide-image" />;
}