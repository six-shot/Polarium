import React from 'react'
import bgg from "../../public/about.jpeg"
import WeAre from "../components/WeAre"
import WorkingAs from "../components/WorkingAs"
export default function page() {
  return (
    <div>
      <div className="relative">
        <div
          style={{
            // use the src property of the image object
            backgroundImage: `url(${bgg.src})`,
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="silka font-bold xl:text-[52px] text-white  text-[40px] text-center leading-[46px] z-50">
            About Us
          </h1>
          <p className="text-white silka xl:w-[700px]  font-medium text-center mt-10 z-50">
            Energy storage is the missing link in the sustainable energy system.
            Our mission is to unlock endless energy. Polarium’s storage
            solutions maximize the potential of solar and wind installations, by
            turning renewable energy into a dispatchable asset and ultimately
            become more energy efficient.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[30%]"></div>
      </div>
      <div className='mt-32'>
      <WeAre />
      <WorkingAs/>
      </div>
    </div>
  );
}
