import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductTile({ singleProduct }) {
  return (
    <div className="p-3 md:p-6 border border-blue-950 cursor-pointer">
      <div className="overflow-hidden">
        <Image
          className="object-contain max-w-[260px] max-h-[260px] mx-auto"
          src={singleProduct.images[0]}
          alt={singleProduct.title}
          width={260}
          height={260}
        />
      </div>

      <h3 className="w-[250px] lg:w-[300px] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-bold text-center mb-2 text-blue-950">
        {singleProduct.title}
      </h3>

      <div className="flex justify-between">
        <p className="block text-blue-950">Price</p>

        <div className="text-right">
          <p className="font-bold text-blue-950">${singleProduct.price}</p>
        </div>
      </div>

      <Link
        href={`/${singleProduct.id}`}
        key={singleProduct.id}
        className="block px-5 mt-3 w-full py-2 rounded-none bg-blue-950 text-white font-bold text-lg text-center"
      >
        View details
      </Link>
    </div>
  );
}

export default ProductTile;
