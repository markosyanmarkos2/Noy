import { Link } from "react-router-dom"
import { navItemsStyle } from "../../db/styles"

type BurgerMenuProps = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
    return (
        <div className={`
          fixed z-[999] right-0 top-0 h-screen w-[250px] flex flex-col gap-[70px] pt-[56px] pl-[40px] backdrop-blur-[15px] bg-[#0f2b4880] transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}>
            <div>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgBzdJLCoAwDEXR4Eq6/011KU+EFhzYfB/BguAk90iNAJjrGUI+T3P3Zb2Ajb0QbGiwsWOTiZktBuZuVLDwbAZLf2BksHzlngBAWiItREO0IB1RMD5ywMLIJX86LVfXsgwt6+0JlbFIII1lBsMzlatwz4Lwc80GAzFbTETF2MgJ2xAV+cDmDaWLPW7ovWELAAAAAElFTkSuQmCC"
                    alt="close"
                    className="text-white"
                    onClick={() => setIsOpen(false)}
                />
            </div>
            <nav className="flex flex-col gap-[30px]">
                <Link className={`${navItemsStyle}`} to={"/"}>OUR PRODUCT</Link>
                <Link className={`${navItemsStyle}`} to={"/"}>ABOUT AS</Link>
                <Link className={`${navItemsStyle}`} to={"/"}>CONTACT US</Link>
            </nav>
        </div>
    )
}

export default BurgerMenu