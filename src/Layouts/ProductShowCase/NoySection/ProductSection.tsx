import { productShowCaseStyles } from "../../../db/styles"
import ProductImg from "./ProductImg"
import ProductDescription from "./ProductDescription"

const ProductShowCaseNoy_section = () => {

  return (
    <div className={`${productShowCaseStyles.noy.productParentDivStyles}`}>
      <ProductImg />
      <ProductDescription />
    </div>
  )

}

export default ProductShowCaseNoy_section