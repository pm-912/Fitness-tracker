import './header.css';
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
                        <div>
                            <h1 className='header'>SWEATify</h1>
                            <p>Get into the mind of a programmer.</p>
                        </div>
                            <div className='nav-links'>
                                <Link className='nav-btn' to='/workoutform'>+ New Workout</Link>
                                {Auth.loggedIn() ? (
                                    <>
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
                    </div>
                </div>
                <div className='more'></div>
        </header>
    );
};

export default Header;
