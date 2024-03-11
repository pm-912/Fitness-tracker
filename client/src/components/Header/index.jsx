import { Link } from 'react-router-dom';

import Auth from '../../utils/auth'
const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '300px',
            content: "",
            position: 'absolute',
            width: '300%',
            height: '300%',
            top: '-25%',
            left: '-100%',
            background: 'radial-gradient(ellipse at right, rgba(255,0,0,0) 0%,rgba(255,0,0,0) 50%,rgba(255,0,0,1) 50%,rgba(255,0,0,1) 100%)'
        }}>
            <div>
                <Link>
                </Link>
            </div>
        </header>
    )
}