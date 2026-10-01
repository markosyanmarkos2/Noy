import { Link } from "react-router-dom"
import { navItemsStyle } from "../../db/styles"

const NavBarForHeader = () => {
    return (
        <div className="hidden flex gap-[30px] font-[Georgia] text-white text-[20px] min-[1024px]:flex">
            <Link className={`${navItemsStyle}`} to={"/"}>OUR PRODUCT</Link>
            <Link className={`${navItemsStyle}`} to={"/"}>ABOUT AS</Link>
            <Link className={`${navItemsStyle}`} to={"/"}>CONTACT US</Link>
        </div>
    )
}

export default NavBarForHeader