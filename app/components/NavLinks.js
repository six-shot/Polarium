import React, { useState } from "react";

import { links } from "./MyLinks";
import Link from "next/link";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div className="z-[999] " key={link.id}>
          <div className="sm:px-3 text-left md:cursor-pointer group    ">
            <h1
              className=" flex justify-between items-center md:pr-0 pr-5 group "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? <RxCaretUp /> : <RxCaretDown />}
              </span>
              <span className="text-xl  md:ml-2  md:block hidden group-hover:rotate-180 ">
                <RxCaretDown />
              </span>
            </h1>
            {link.submenu && (
              <div className="max-w-[1440px] mx-auto">
                <div className=" hidden group-hover:md:block hover:md:block">
                  <div className="bg-white w-full">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.id}>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-sm    hover:bg-blue-200 px-6 list-none  py-[3px] "
                            key={slink.id}
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-primary  "
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
           
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.id}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.id}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
