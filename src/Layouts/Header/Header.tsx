import { Link } from "react-router-dom"
import { paddingItems } from "../../db/styles"
import NavBarForHeader from "./NavBar"
import BurgerMenu from "./BurgerMenu"
import { useState } from "react"

const Header_layouts = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="absolute w-full z-999">
      <div className={`${paddingItems}`}>
        <header>
          <div className="flex justify-between items-center">
            <div>
              <Link to={"/"}><img src="https://www.noy.am/_nuxt/logo.86ebabc8.svg" alt="" /></Link>
            </div>
            <div>
              <NavBarForHeader />
            </div>
            <div className="min-[1024px]:hidden">
              <i 
              className="fa-solid fa-bars text-white text-[30px]"
              onClick={() => setIsOpen(true)}
              ></i>
            </div>
          </div>
        </header>
        <div>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  )
}

export default Header_layouts