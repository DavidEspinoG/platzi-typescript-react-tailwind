import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (): ReactElement => {
  const activeStyle: string = 'underline underline-offset-4'
  const conditionalStyle = ({isActive}:{isActive: boolean}) => isActive ? activeStyle : undefined
  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink 
            to='/' 
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={conditionalStyle}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to='/clothes' className={conditionalStyle}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/electronics' className={conditionalStyle}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to='/furnitures' className={conditionalStyle}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink to='/toys' className={conditionalStyle}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className={conditionalStyle}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/50'>
          davidespinog@gmail.com
        </li>
        <li>
          <NavLink to='/my-orders' className={conditionalStyle}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/my-account' className={conditionalStyle}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-in' className={conditionalStyle}>
            Sign in
          </NavLink>
        </li>
        <li>
          <NavLink to='/others' className={conditionalStyle}>
            Others
          </NavLink>
        </li>
        <li>
          🛒
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;