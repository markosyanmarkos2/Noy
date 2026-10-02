import { productShowCaseStyles } from "../../../db/styles"

const ProductDescription = () => {
  
  return (
    <div className={`${productShowCaseStyles.productDescriptionParentDivStyles}`}>
      <div className={`${productShowCaseStyles.descriptionTitle}`}>
        Naturally pure for a crisp, refreshing taste.
      </div>
      <div className="text-[14px] 2xl:text-[20px]">
        Available in both glass and PET plastic for wherever your day takes you.
      </div>
      <div className="flex max-xl:justify-center">
        <button className="flex p-[16px_40px] bg-[rgb(48_101_133/50)] font-bold gap-[15px]">VIEW STILL VIDEO <img width={17} height={24} src="https://www.noy.am/_nuxt/Line1.ad574f07.svg" alt="" /></button>
      </div>
    </div>
  )

}

export default ProductDescription