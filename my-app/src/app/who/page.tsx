"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Hero } from "../../../components/Hero";
import { heroData } from "../../../constants";

interface PageData {
  URL: string;
  directory: string;
}

export default function Pages() {
  const [data, setData] = useState<PageData | null>(null);
  const [randomHeadline, setRandomHeadline] = useState<string>("");
  const pathname = usePathname();

  const [, { pages }] = heroData;

  const handleRandom = ({ headlines }: { headlines: string[] }) => {
    if (!headlines || headlines.length === 0) {
      console.log("No headlines available");
      return;
    }
    const random = Math.floor(Math.random() * headlines.length);
    const randomHeadline = headlines[random];
    setRandomHeadline(randomHeadline);
  };

  useEffect(() => {
    if (pages !== undefined) {
      const thisPageData = pages.filter((item) => item.URL === pathname);
      if (thisPageData.length > 0) {
        setData(thisPageData[0]);
        handleRandom(thisPageData[0]);
      }
    }
  }, [pathname, pages]);

  return (
    <>
      {data && (
        <Hero showSlider image={data.directory} sliderText={randomHeadline} />
      )}
    </>
  );
}
