"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Hero } from "../../../components/Hero";
import { heroData } from "../../../constants";
import { handleRandom } from "../../../utils";

interface PageData {
  URL: string;
  directory: string;
}

export default function Pages() {
  const [data, setData] = useState<PageData | null>(null);
  const [randomHeadline, setRandomHeadline] = useState<string>("");
  const pathname = usePathname();

  const [, { pages }] = heroData;

  useEffect(() => {
    if (pages !== undefined) {
      const thisPageData = pages.filter((item) => item.URL === pathname);
      if (thisPageData.length > 0) {
        setData(thisPageData[0]);
        const handleRandomRes = handleRandom(thisPageData[0]);
        console.log(handleRandomRes);
        if (handleRandomRes) {
          setRandomHeadline(handleRandomRes);
        }
      }
    }
  }, [pathname, pages]);

  return (
    <>
      {data && (
        <Hero
          showSlider
          image={data.directory}
          sliderText={randomHeadline}
          showJoinButton={false}
        />
      )}
    </>
  );
}
