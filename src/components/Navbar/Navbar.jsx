import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='header'>
        <div className='marvel-info'><span className='color-red'>Marvel</span> information portal</div>
        <Link className='marvel-links' to="/comics">Comics</Link>
    </div>
  );
};

export default Navbar;