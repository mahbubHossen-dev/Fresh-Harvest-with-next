
import ProductDetails from "../../../components/productComponents/ProductDetails";
import RelatedProducts from "../../../components/productComponents/RelatedProducts";
import ReviewComponent from "../../../components/productComponents/ReviewComponent";




export default function page({params}) {
    const { id } = params; // Extract the product ID from the URL
  

    return (
        <div className="pt-24">
            {id && <ProductDetails id={id}/>}
            <RelatedProducts/>
            <ReviewComponent />
        </div>
    )
}
