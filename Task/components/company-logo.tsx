"use client";

import Image from "next/image";
import { useState } from "react";

interface CompanyLogoProps {
  src: string;
  alt: string;
  company: string;
}

export function CompanyLogo({ src, alt, company }: CompanyLogoProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-contain p-1"
      sizes="48px"
      onError={() => {
        setImgSrc(
          `https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=6366f1&color=fff&size=48`
        );
      }}
    />
  );
}
