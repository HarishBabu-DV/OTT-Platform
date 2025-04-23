import { useContext } from "react"
import { Link } from "react-router"
import { NavBarContext } from "../../context/NavBarStatus"
import appData from "../../assets/assets"

const NavBar = () => {
    const { isNavBarOpened,setIsNavBarOpened}=useContext(NavBarContext)
    const { navBarData }=appData
    return (
            <nav className={`${isNavBarOpened ? `sm:w-[200px]` :`sm:w-[80px]`} client-navbar`} onMouseEnter={()=>setIsNavBarOpened(true)} onMouseLeave={()=>setIsNavBarOpened(false)}>
            {
                navBarData.map((navItem)=>(
                    <Link to={navItem.pathName} className="navbar-navitem">
                        <li className="flex flex-col items-center relative text-[#ffffffa4] transition-all ease-out duration-300 gap-1 sm:flex-row sm:gap-4 hover:text-white ">  
                            {/* Icons */}
                            <div>
                                { <navItem.iconName className={`text-xl sm:text-2xl`}/> }
                            </div>
                            {/* Names */}
                            <div className={`${isNavBarOpened ? `left-[50px] slide-animation`:` sm:opacity-0 sm:left-0`} text-[0.7rem] sm:absolute sm:text-[1.15rem] sm:font-medium navitem-names`}>
                                { navItem.navItemName }
                            </div>                    
                        </li>
                    </Link>
                ))
            }
        </nav>
    )
}

export default NavBar