"use client";

import { ImageProps } from "next/image";
import { Image } from "@imagekit/next";
import { useState } from "react";

export function SafeImage({
  src,
  alt,
  ...props
}: ImageProps & { src?: string | null }) {
  const [imgSrc, setImgSrc] = useState(
    src && src.trim() !== "" ? src : "/placeholder.png"
  );

  return (
    <Image
      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
      src={imgSrc}
      alt={alt}
      {...props}
      onError={() => setImgSrc("/placeholder.png")}
    />
  );
}
