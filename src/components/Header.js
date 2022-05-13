import React from 'react';
import '../components/styles/Header.css';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
 
const Header = () => {
    const [{user}] = useStateValue();
    const login = () => {
        auth.signOut();
    }

    return (
        <Link to="/">
            <nav className='header'>
                <img
                    className='header_logo'
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt='Logo Amazon' />

                <div className='header_searchbox'>
                    <input type='text' className='header_searchInput' placeholder='Search products, brands and more...' />
                    <FaSearch className='header_searchIcon' />
                </div>

                <div className='header_nav'>
                    <Link to={/*!user && */'/login'} className='header_link'>
                        <div onClick={login} className='header_option'>
                            <span className='header_op1'> Hello {user?.email}</span>
                            <span className='header_op2'>{user? 'Sing out' : 'Sing in'}</span>
                        </div>
                    </Link>

                    <Link to='/' className='header_link'>
                        <div className='header_option'>
                            <span className='header_op1'> Returns</span>
                            <span className='header_op2'> & Orders</span>
                        </div>
                    </Link>

                    <Link to='/' className='header_link'>
                        <div className='header_option'>
                            <span className='header_op1'> Your</span>
                            <span className='header_op2'> Favorites</span>
                        </div>
                    </Link>

                    <Link to='/checkout' className='header_link'>
                        <div className='header_basket'>
                            <BsFillBasket3Fill />
                            <span className='header_op2 header_basketCount'> 0 </span>
                        </div>
                    </Link>
                </div>
            </nav>
        </Link>
    )
}

export default Header;