"use client";
import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero";
import { heroData } from "../../constants";

export default function Home() {
  const [randomHeadline, setRandomHeadline] = useState<string>("");
  const [pageData] = heroData;
  const { headlines } = pageData;

  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    if (headlines !== undefined) {
      setRandomHeadline(headlines[random]);
    }
  }, []);

  return (
    <>
      <Hero
        showSlider
        image={pageData.directory || ""}
        sliderText={randomHeadline}
        showJoinButton={true}
      />
    </>
  );
}
