import { productShowCaseStyles } from "../../../db/styles"
import ProductDescriptionBjni from "./ProductDescription"
import ProductImgBjni from "./ProductImg"

const ProductShowCaseBjni_section = () => {

    return (
        <div className={`${productShowCaseStyles.bjni.productParentDivStyles}`}>
            <ProductDescriptionBjni />
            <ProductImgBjni />
        </div>
    )

}

export default ProductShowCaseBjni_section