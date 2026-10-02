import { originOfNoy } from "../../db/styles"

const OriginOfNoy = () => {

  return (
    <div className={`${originOfNoy.parentDivStyles}`}>
      <div >
        <h1 className={`${originOfNoy.titleStyles}`}>Journey through the mountains</h1>
      </div>
      <div>
        <p className={`${originOfNoy.bodyStyles}`}>
          All Noy products are designed to bring you natural
          water straight from the mouitains, so you can enjoy the
          distinctive cool, crisp taste of Noy  anytime, anywhere.
          The Mountain made Noy water naturally hydrating, the
          world made Noy water culturally iconic.
        </p>
      </div>
    </div>
  )
  
}

export default OriginOfNoy