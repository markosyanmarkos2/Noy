import { productShowCaseStyles } from "../../../db/styles"

const ProductImgBjni = () => {
    return (
        <div className="relative">
            <div>
                <video className={`${productShowCaseStyles.gifDivStyles} object-cover `} autoPlay muted loop playsInline >
                <source  src={`${productShowCaseStyles.bjni.gif}`} type="video/mp4"/>
            </video>
            <div className={`${productShowCaseStyles.bjni.bottleImg}`}></div>
            </div>
        </div>
    )
}

export default ProductImgBjni 