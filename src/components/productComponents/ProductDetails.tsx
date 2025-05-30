'use client'
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { useContext, useEffect, useState } from "react";
import {AuthContext} from '../../Provider/AuthProvider'

export default function ProductDetails({ id }) {
  const {mhb} = useContext(AuthContext)
  console.log(mhb)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://code-commando.com/api/v1/products/${id}`);
        const data = await res.json();

        if (data.success) {
          setProduct(data.data);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  console.log(product)

  const [quantity, setQuantity] = useState(1);
  
  const rating = 5;
  

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="w-full px-5 lg:px-8 xl:px-[8%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
      <figure className="w-ful">
        {loading ? (
          'Loading'
        ) : (
          <Image
            src={product.images[0]}
            width={500}
            height={500}
            alt={product?.productName || "Product image"}
            className="w-full h-full rounded-3xl"
          />
        )}
      </figure>
      <div className="space-y-10 font-rubik flex flex-col justify-between py-5">
        <div className="max-sm:space-y-6 max-lg:space-y-8 max-2xl:space-y-10 2xl:space-y-10">
          <button className="text-[14px] sm:text-xl bg-[#749B3F1A] rounded-xl font-medium text-greenText px-3 py-1 ">
            Fruits
          </button>
          <h2 className="text-[#212337] text-3xl sm:text-5xl font-medium ">
            {product?.productName}
          </h2>

          <div className="flex items-center gap-5">
            <div className="flex">
              <Rating initialValue={rating} size={20} />
            </div>
            <p className="font-medium text-[18px]">
              {rating.toFixed(1)}{" "}
              <span className="text-[12px]">(1 review)</span>{" "}
            </p>
          </div>

          <h4 className="text-[#FF6A1A] font-semibold text-2xl sm:text-3xl">
            {product?.price}
          </h4>
          <p className="text-[#4A4A52] text-[18px] text-justify">
            From our farm directly to your door, our fresh coconuts are
            harvested at the peak of ripeness, offering you a sweet, hydrating
            treat full of flavor. Packed with natural nutrients, coconut is
            perfect for a variety of culinary uses, from smoothies to savory
            dishes, or even for a refreshing drink straight from the shell.
          </p>
        </div>
        <div className="max-sm:space-y-6 max-lg:space-y-8 max-2xl:space-y-10 2xl:space-y-10">
          {/* Quantity */}
          <div className="flex gap-10 items-center">
            <span className="text-xl font-medium text-[#212337]">Quantity</span>
            <div>
              <button
                className="px-5 py-1 rounded-l-md border border-[#D9D9D9] text-2xl font-bold"
                onClick={handleDecrease}
              >
                -
              </button>
              <button className="px-5 py-1 border border-[#D9D9D9] border-x-0 text-2xl font-bold text-[#343434]">
                {quantity}
              </button>
              <button
                className="px-5 py-1 rounded-r-md border border-[#D9D9D9] text-2xl font-bold"
                onClick={handleIncrease}
              >
                +
              </button>
              <span className="ml-5">/kg</span>
            </div>
          </div>
          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <button className="flex items-center justify-center gap-5 px-8 py-4 rounded-lg bg-[#F4F6F6]">
              <FaHeart />
              <span className="text-[#4A4A52] font-semibold text-xl">
                Save as favorite
              </span>
            </button>
            <button className="flex items-center justify-center gap-5 px-8 py-4 rounded-lg bg-[#FF6A1A] text-white">
              <MdShoppingCart />
              <span className="font-semibold text-xl font-rubik">
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
