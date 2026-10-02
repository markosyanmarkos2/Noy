const ProductDescription = () => {
    return (
        <div className="flex flex-col text-center 2xl:gap-[40px] max-[1220px]:justify-center min-[830px]:gap-[32px] gap-[20px] text-white lg:w-[600px] font-[arial]">
            <div className="text-[22px] min-[470px] text-[26px] 2xl:text-[40px] xl:text-[32px] ">
                Naturally pure for a crisp, refreshing taste.
            </div>
            <div className="text-[14px] 2xl:text-[20px]">
                Available in both glass and PET plastic for wherever your day takes you.
            </div>
            <div className="flex justify-center">
                <button className="flex p-[16px_40px] bg-[rgb(48_101_133/50)] font-bold gap-[15px]">VIEW STILL VIDEO <img width={17} height={24} src="https://www.noy.am/_nuxt/Line1.ad574f07.svg" alt="" /></button>
            </div>
        </div>
    )
}

export default ProductDescription