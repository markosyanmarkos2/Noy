import { productShowCaseStyles } from "../../../db/styles"

const ProductDescriptionBjni = () => {
    return (
        <div className={`${productShowCaseStyles.productDescriptionParentDivStyles}`}>
            <div className={`${productShowCaseStyles.descriptionTitle}`}>
                The finest sparkling around.
            </div>
            <div className="text-[14px] 2xl:text-[20px]">
                Delicate bubbles for a more fefined taste.
            </div>
            <div className="flex max-xl:justify-center">
                <button className="flex p-[16px_40px] bg-[rgb(32_129_13/50)] font-bold gap-[15px]">View sparkling water <img width={17} height={24} src="https://www.noy.am/_nuxt/Line1.ad574f07.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default ProductDescriptionBjni