import { productsData } from "@/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import backIcon from '@/public/back.png'

function ProductDetailsPage({ params }) {
  const productId = parseInt(params.id);
  const product = productsData.find((product) => product.id === productId);

  return (
    <section className="max-w-[1400px] lg:max-w-[1600px] mx-auto">
      <Link href='/' className="block mt-4 mx-2">
          <Image src={backIcon} width={25} height={25} alt="Back Home page" />
        </Link>
      <div className="p-2 mt-2">
        
        <h2 className="text-center font-bold text-blue-950 lg:text-2xl">{product.title}</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-5">
          
          <div className="">
            <Image
              src={product.images[0]}
              width={500}
              height={500}
              alt={product.title}
              className="py-5 max-h-[500px] object-contain"
            />
          </div>
          <div className="px-3 sm:py-5 sm:max-w-[400px] lg:max-w-[600px]">
            <p className="text-xs mb-2">
              Category:{" "}
              <span className="bg-blue-200 rounded-xl py-1 px-2">
                {product.category}
              </span>
            </p>
            <p className="text-justify mb-2">{product.description}</p>
            <p className="text-blue-950">Price: <span className="font-bold">${product.price}</span> </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
