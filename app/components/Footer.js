import React from "react";
import about from "../../public/About.svg";
import FT from "../../public/FT.png";
import nor from "../../public/nor.png";
import Image from "next/image";
import { footerLinks } from "../api/Data";
export default function Footer() {
  return (
    <div>
      <div className="bg-[#f5f5f5] ">
        <div className="max-w-[1440px] py-20 mx-auto grid grid-cols-7">
          <div className="col-span-3 pr-32 ">
            <Image className="w-[100px] mb-10" src={about} alt="about" />
            <div className="flex justify-between  items-center">
              <Image className="w-[55%]" src={FT} alt="about" />
              <Image className="w-[35%]" src={nor} alt="about" />
            </div>
            <div className="mt-10">
              <h5 className="silka font-medium text-[24px] mb-5">
                Join our newsletter
              </h5>
            </div>
            <div className="w-full h-[48px] border bg-[#f5f5f5] border-black rounded-[50px]">
              <input
                type="text"
                className="w-full h-full bg-transparent rounded-[50px] pl-12 placeholder:text-[14px] silka placeholder:text-black"
                placeholder="Enter your email"
              />
            </div>
            <button className=" mt-10 text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
              Submit
            </button>
            <p className="silka text-[10px] mt-4">
              By clicking Submit, you consent to Polarium storing and processing
              your personal information to provide you the content requested.
              Read our privacy policy <span className="underline">here</span>.
            </p>
          </div>

          <div className="col-span-4">
            <div className="w-full flex flex-row gap-2 flex-wrap md:mt-0 mt-10">
              {footerLinks.map((item,index) => (
                <div className="flex flex-col ss:my-0 my-4 min-w-[150px]" key={index}>
                  <h4 className="silka font-semibold text-[16px] leading-[27px] mb-3 ">
                    {item.title}
                  </h4>
                  <ul className="mt-4">
                    {item.links.map((item) => {
                      return (
                        <li className="silka text-[14px] mb-3 w-[180px] leading-[22px]">
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
