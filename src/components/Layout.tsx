import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <nav className="bg-gray-700 fixed top-0 left-0 right-0 text-gray-200 flex justify-between items-center px-5 py-5">
        <Link to="/dashboard">
          Logo
        </Link>
      </nav>
      <main className="mt-[4.5rem]">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout