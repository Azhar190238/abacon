"use client";

import React from "react";

const CommonHeader = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col items-center justify-center border-b border-b-[#0F74BA] bg-[#D7D7D7] h-[150px]">
      <div className="container flex flex-col items-start justify-center">
        <div className="w-full">
          <div className="border-l border-[#1E2E7B] h-[40px] my-4"></div>
          {subheading && (
            <h2 className="text-3xl font-anton text-[#1E2E7B] font-bold">
              {heading}  |
              {subheading && (
                <span className="text-[#5FA4D7] font-semibold"> {subheading}</span>
              )}
            </h2>
          )}
        </div>

        {!subheading && (
          <h2 className="text-3xl text-[#1E2E7B] font-anton font-semibold">{heading}</h2>
        )}
      </div>
    </div>
  );
};

export default CommonHeader;
