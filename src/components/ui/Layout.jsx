import NavBarStatus from '../../context/NavBarStatus'
import MoviesInfo from '../../context/MoviesInfo'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='max-w-[1920px] w-full mx-auto'>
        {/* NavBarStatus Context */}
        <NavBarStatus>
            {/* NavBar  */}
            <NavBar />
            <div className="max-sm:mb-[55px] sm:ml-[80px]">
                {/* MoviesInfo Context */}
                <MoviesInfo>
                  <Outlet /> 
                </MoviesInfo>
                {/* <Footer />  */}
            </div>
        </NavBarStatus>
    </div>
  )
}

export default Layout