import AddToCart from "@/app/components/AddToCart";
import styles from './Product.module.css'

const ProductCard = () => {
    return (
        <div className={styles.card}>
            <AddToCart />
        </div>
    )
}

export default ProductCard;