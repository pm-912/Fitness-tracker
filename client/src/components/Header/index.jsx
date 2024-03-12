import './header.css';
import logo from '../../assets/logo/SWEATify-logo.png'
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="">
            <div className='curve'>
                <div className='navbar'>
                    <div className='nav-links'>
                        <Link className='nav-btn' to='/'>Home</Link>

                        {Auth.loggedIn() ? (
                            <>
                                <Link className='nav-btn' to='/workoutform'>+ New Workout</Link>
                                <Link className="nav-btn" to="/userworkout">
                                    {Auth.getProfile().data.username}'s profile
                                </Link>
                                <button className="nav-btn" onClick={logout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className="nav-btn" to="/loginsignup">
                                    Login
                                </Link>
                                <Link className="nav-btn" to="/loginsignup">
                                    Signup
                                </Link>
                            </>
                        )}

                    </div>
                    <div className='header'>
                        {/* <h1 className='title'>SWEATify</h1> */}
                        <img className='logo' src={logo} alt="Logo" />
                    </div>

                </div>
            </div>
            <div className='more'></div>
        </header>
    );
};

export default Header;
