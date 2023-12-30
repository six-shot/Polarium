import Image from 'next/image'
import React from 'react'
import working from "../../public/working.webp"

export default function WorkingAs() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto mt-48">
        <div className="grid grid-cols-7 justify-end items-end">
          <div className="col-span-5 ">
            <Image src={working} className="rounded-[20px]" alt="working" />
          </div>
          <div className="col-span-2 flex justify-end items-start pl-20 flex-col">
            <h4 className="silka sm:text-[30px] text-[20px] font-bold xl:leading-[36px] leading-[28px]">
              Working as One
            </h4>
            <p className="text-black  silka my-6 xl:my-10">
              We are a multi-cultural company with ∼500 people worldwide. We
              believe that our differences are what makes us stronger together.
              So, we work as one team to achieve our goals. Through close
              collaboration across business units and geographies, everyone can
              share ideas and best practices. That is how we show our power.
            </p>
            <button className=" text-[13px] py-3.5 px-10 silka font-medium text-white bg-[#000] rounded-[50px]">
            Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
