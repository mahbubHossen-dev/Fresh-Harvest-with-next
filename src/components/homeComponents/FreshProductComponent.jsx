'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function FreshProductComponent() {
  const [toggle, setToggle] = useState('fruits');
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategories = async () => {
    try {
      const res = await fetch('https://code-commando.com/api/v1/category');
      const data = await res.json();
      setCategory(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategoryId = async () => {
    const matchedCategory = category.find(item => item.categoryName === toggle);

    try {
      const res = await fetch('https://code-commando.com/api/v1/products');
      const data = await res.json();
      const filterByCategory = data.data.filter(product => product.categoryId === matchedCategory.id)
      setProducts(filterByCategory);
      console.log(filterByCategory)
    } catch (error) {
      console.log(error);
    }

    console.log(matchedCategory)

  };

  useEffect(() => {
    if (toggle) {
      getCategoryId();
    }
  }, [toggle, category, setProducts]);

  return (
    <section className="w-full px-5 lg:px-8 xl:px-[8%] space-y-10 lg:space-y-10 pt-24">
      {/* Header */}
      <div className="text-center space-y-4 lg:space-y-5">
        <button className="text-[14px] sm:text-xl bg-[#749B3F1A] rounded-lg lg:rounded-xl font-semibold text-greenText px-3 py-1">
          Out Products
        </button>
        <h2 className="text-[#212337] font-medium text-3xl sm:text-4xl lg:text-5xl">
          Our Fresh Products
        </h2>
        <p className="text-[12px] sm:text-base text-[#4A4A52] max-sm:w-[80%] lg:w-[30%] mx-auto">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>

        {/* Filter Buttons */}
        <div className="max-sm:space-x-2 max-lg:space-x-3 max-2xl:space-x-4 2xl:space-x-4">
          {category.map((item, index) => (
            <button
              key={index}
              onClick={() => setToggle(item.categoryName)}
              className={`px-4 py-2 sm:px-8 sm:py-4 lg:px-6 lg:py-3 rounded-lg text-[12px] sm:text-xl lg:text-xl ${toggle === item.categoryName
                ? "bg-[#749B3F] text-white"
                : "border border-[#D9D9D9]"
                }`}
            >
              {item.categoryName}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product, index) => (
          <Link href={`/product/${product.id}`} key={index} className="p-4 rounded-2xl shadow-xl space-y-4">
            <figure className="bg-[#F4F6F6] rounded-2xl flex items-center justify-center">
              {
                product?.images[0] && <Image
                  src={product?.images[0]}
                  width={200}
                  height={200}
                  className="max-sm:w-[140px] max-sm:h-[140px] max-lg:w-[200px] max-lg:h-[200px] max-2xl:w-[200px] max-2xl:h-[200px] py-5"
                  alt="A fruit image"
                />
              }

            </figure>
            <div className="text-center space-y-2">
              <h4 className="font-medium text-[#212337] text-xl">
                {product?.productName}
              </h4>
              <p className="text-[#4A4A52]">${product?.price}</p>
              <button className="text-[#212337] font-medium border border-[#D9D9D9] w-full rounded-md py-1 text-xl hover:bg-[#FF6A1A] hover:text-white hover:transition-all">
                Add to cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* All Product Button */}
      <div className="text-center">
        <button className="border border-[#FF6A1A] text-[#FF6A1A] max-sm:text-[14px] text-xl lg:px-8 lg:py-4 rounded-lg">
          See All Products
        </button>
      </div>
    </section>
  );
}