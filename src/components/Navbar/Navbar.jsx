import './navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
        <div className='marvel-info'><span className='color-red'>Marvel</span> information portal</div>
        <div className='marvel-links'>
          <NavLink className='characters' to="/">Characters</NavLink>/
          <NavLink to="/comics">Comics</NavLink>
        </div>
    </div>
  );
};

export default Navbar;