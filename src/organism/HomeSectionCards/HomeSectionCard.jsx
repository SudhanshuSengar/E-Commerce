import React from "react";

function HomeSectionCard() {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/p/u/l-purple-linen-kurtaax-nofilter-original-imah2c2n3kdtufxu.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
        <p className="mt-2 text-sm text-gray-500">Men solid pure cotton straight kurta</p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
