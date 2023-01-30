import { Link, Outlet } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'

const Layout = () => {
  const [modal, setModal] = useState(false)

  return (
    <div>
      <nav className="bg-gray-700 fixed top-0 left-0 right-0 text-gray-200 flex justify-between items-center px-5 py-5">
        <Link to="/dashboard">
          Logo
        </Link>
        <button
          className="bg-white text-black py-2 px-2"
          onClick={() => setModal(!modal)}
        >
          <GiHamburgerMenu />
        </button>
        {modal ? (
          <div className="flex flex-col items-center fixed justify-center mt-[14.3rem] left-0 right-0 border-t-2 border-t-black bg-purple-500">
            <Link to="/dashboard/sellers" className="py-3.5 w-full justify-center flex">
              sellers
            </Link>
            <Link to="/" className="py-3.5 w-full justify-center flex">
              stock
            </Link>
            <button className="py-3.5 w-full justify-center flex">
              logout
            </button>
          </div>
        ) : null}
      </nav>
      <main className="mt-[4.5rem]">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout