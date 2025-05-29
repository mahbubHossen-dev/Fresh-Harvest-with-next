'use client'
import ProductDetails from "@/components/blogComponents/ProductDetails";
import RelatedProducts from "@/components/blogComponents/RelatedProducts";
import ReviewComponent from "@/components/blogComponents/ReviewComponent";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



export default function BlogPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id")
    const [product, setProduct] = useState({})

    const getProductById = async () => {
        try {
            const res = await fetch(`https://code-commando.com/api/v1/products/${id}`)
            const data = await res.json()
            setProduct(data.data)
            // console.log(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            getProductById();
        }
    }, [id]);


    return (
        <div>
            <ProductDetails product={product} />
            <RelatedProducts product={product}/>
            <ReviewComponent />
        </div>
    )
}
