import ProductDetails from "@/components/blogComponents/ProductDetails";
import RelatedProducts from "@/components/blogComponents/RelatedProducts";
import ReviewComponent from "@/components/blogComponents/ReviewComponent";


export default function BlogPage() {
    return (
        <div>
            <ProductDetails />
            <RelatedProducts />
            <ReviewComponent />
        </div>
    )
}
