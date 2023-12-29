"use client";
import React, { useEffect, useState } from "react";
import one from "../public/one.webp";
import two from "../public/one.webp";
import Image from "next/image";

function ImageSlider() {
  const imgs = [
    { id: 0, value: one },
    { id: 1, value: two },
    { id: 2, value: one },
    { id: 3, value: one },
  ];
  const [wordData, setWordData] = useState(imgs[0]);

  const handleHover = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  return (
    <div className="w-full">
      <div className="w-full h-[418px] relative">
        <div className="absolute inset-0 bg-black opacity-[35%] transition-opacity duration-300 rounded-[8px]"></div>
        <Image
          src={wordData.value}
          className="w-full h-full object-cover"
          alt="slide"
        />
      </div>

      <div className="flex justify-between xl:flex-row flex-col">
        {imgs.map((data, i) => (
          <div className="xl:w-[200px] w-full h-[100px] relative mt-5" key={i}>
           
            <div
              className={
                wordData.id === i
                  ? "cursor-pointer w-full h-full object-cover opacity-100"
                  : "w-full h-full object-cover opacity-75 hover:opacity-100"
              }
              onMouseEnter={() => handleHover(i)}
              style={{ transition: "opacity 300ms ease-in-out" }}
            >
              <Image src={data.value} alt="slide" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;