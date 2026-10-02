import { productShowCaseStyles } from "../../../db/styles"

const ProductImg = () => {
    return (
        <div className="relative">
            <div className="flex">
                <img className="w-[320px] h-[320px] 2xl:h-[440px] 2xl:w-[440px] xl:w-[360px] xl:h-[360px] rounded-[50%]" src={`${productShowCaseStyles.noy.gif}`} alt="" />
            </div>
            <div className={`${productShowCaseStyles.noy.bottleImg}`}></div>
        </div>
        
    )
}

export default ProductImg