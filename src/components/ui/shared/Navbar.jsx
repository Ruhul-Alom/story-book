import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navOptions=[
        {
        route:'/',
        routeName:"Home"
    },
    {
        route:'about',
        routeName:"About"
    },
    {
        route:'contact',
        routeName:"Contact"

    }

]
  return (
    <div className="navbar bg-base-100 justify-between">
  <div >
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 ">
       {
        navOptions.map(option=> <li><Link to={option.route}>{option.routeName}</Link></li>)
       }
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">Story Book</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
        navOptions.map(option=> <li><Link to={option.route}>{option.routeName}</Link></li>)
       }
      </ul>
  </div>
</div>
  )
}

export default Navbar