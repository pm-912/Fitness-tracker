import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };


    const style = {
        overlay: {
            position: 'relative',
            overflow: 'hidden',
            width: '100vw',
            height: '100vh',
        },
        gradientOverlay: {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(ellipse at right, rgba(255,0,0,0) 0%,rgba(255,0,0,0) 50%,rgba(185, 232, 239, 1) 50%,rgba(185, 232, 239, 1) 100%)',
            zIndex: -1
        },
        content: {
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000', // Set text color
        },
    }
    // const style = {
    //     overlay: {
    //         position: 'absolute',
    //         width: '300%',
    //         height: '300%',
    //         top: '-45%',
    //         left: '-100%',
    //         background: 'radial-gradient(ellipse at right, rgba(255,0,0,0) 0%,rgba(255,0,0,0) 50%,rgba(185, 232, 239, 1) 50%,rgba(185, 232, 239, 1) 100%)',

    //     }, 

    // }
    return (
        <header style={style.overlay}>
            <div style={style.gradientOverlay}></div>
            <div style={style.content}>
                <Link>
                </Link>
            </div>
        </header>
    )
};


export default Header;