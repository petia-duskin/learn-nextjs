import AddToCart from "@/app/components/AddToCart";

const ProductCard = () => {
    return (
        <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500 transition duration-200">
            <AddToCart />
        </div>
    )
}

export default ProductCard;