import { productShowCaseStyles } from "../../../db/styles"

const ProductImg = () => {

  return (
    <div className="relative">
      <div className="flex">
        <img className={`${productShowCaseStyles.gifDivStyles}`} src={`${productShowCaseStyles.noy.gif}`} alt="" />
      </div>
      <div className={`${productShowCaseStyles.noy.bottleImg}`}></div>
    </div>

  )

}

export default ProductImg