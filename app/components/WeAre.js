import React from "react";
import pol from "../../public/pol.webp";
import Image from "next/image";

function WeAre() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-center  px-6 ">
        <h3 className="sm:text-[40px] text-[30px] sm:leading-[45px] leading-[40px] font-bold silka">
          We Are Polarium
        </h3>
        <p className="text-black silka xl:w-[700px]  font-medium text-center mt-10">
          Polarium is a leading energy storage developer. We make energy storage
          and optimization solutions built on lithium-ion battery technology for
          businesses within telecom, commercial, industrial and residential
          facilities across the world. Polarium was founded in 2015 on the
          conviction that safe, smart and sustainable energy storage solutions
          will be key to empower the transition to a truly, sustainable energy
          future. We are an impact business contributing to the sustainable
          energy transformation by enabling renewables, electrification and
          intermittent power supply. Our cutting-edge and easily adaptable
          modular battery technology enables us to be in the forefront of
          developing state-of-the art sustainable energy storage and
          optimization solutions for today – and tomorrow. Polarium is a fast
          growing, entrepreneurial company headquartered in Stockholm, with
          production in Mexico, South Africa and Vietnam, customers across the
          world from Ghana to Svalbard and ∼500 employees.
        </p>
        <div className="w-[100%] sm:h-full h-[40vh] rounded-3xl pt-24"></div>
        <div className="flex xl:justify-between w-full justify-center xl:flex-row flex-col xl:gap-0 gap-14 items-center xl:px-72">
          <div className="flex justify-center items-center flex-col">
            <h4 className="silka text-[50px]  font-bold text-center">2,223M</h4>
            <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
            <h6 className="silka text-center">Net sales 2022 (SEK)</h6>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className="silka text-[50px]  font-bold text-center">75%</h4>
            <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
            <h6 className="silka text-center">
              Compounded annual growth rate 2018–2022
            </h6>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className="silka text-[50px]  font-bold text-center">
              440,000+
            </h4>
            <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
            <h6 className="silka text-center">Installed batteries</h6>
          </div>
        </div>
        <div className="flex xl:justify-between w-full justify-center xl:flex-row flex-col xl:gap-0 gap-14 items-center xl:px-[350px] mt-36 ">
          <div className="flex justify-center items-center flex-col">
            <h4 className="silka text-[50px]  font-bold text-center">70</h4>
            <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
            <h6 className="silka text-center">Countries with installations</h6>
          </div>

          <div className="flex justify-center items-center flex-col">
            <h4 className="silka text-[50px]  font-bold text-center">~500</h4>
            <hr className="w-[70px]  h-[1px] bg-[#cccccc] my-3" />
            <h6 className="silka text-center">No. of people</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeAre;
