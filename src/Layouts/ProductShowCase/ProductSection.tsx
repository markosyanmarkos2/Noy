import ProductImg from "./NoySection/Product"
import ProductDescription from "./NoySection/ProductDescription"

const ProductShowCaseNoy_section = () => {
    return (
        <div className="flex max-[1220px]:flex-col max-[1220px]:gap-[100px] max-[1220px]:h-auto p-[80px_20px] justify-between h-[100vh] bg-[linear-gradient(189.78deg,#a0cdea_7.35%,#3a84b4_92.65%)] items-center 2xl:p-[180px_200px] xl:p-[80px_120px]">
            <ProductImg />
            <ProductDescription />
        </div>
    )
}

export default ProductShowCaseNoy_section