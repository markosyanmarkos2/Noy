import Header_layouts from "../Layouts/Header/Header"
import OriginOfNoy from "../Layouts/OriginOfNoy/OriginSectin"
import ProductShowCaseNoy_section from "../Layouts/ProductShowCase/ProductSection"
import HeroSlider from "../Layouts/Sliders/HeroSlider/HeroSlider"

const HomePage_Component = () => {
  return (
    <>
      {/*  */}
      <Header_layouts />
      {/*  */}
      <HeroSlider />
      {/*  */}
      <OriginOfNoy />
      {/*  */}
      <ProductShowCaseNoy_section />
    </>

  )
}

export default HomePage_Component