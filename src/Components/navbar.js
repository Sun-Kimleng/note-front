
import {NavLink} from 'react-router-dom';
import '../Assets/navbar.css'

const Navbar = () => {
    return (  
        <div className="navbar">
            <div className="navbar-child">
                
                <div className="navbar-left">
                <NavLink to="/" className="link"><div>Home</div></NavLink>
                </div>

                <div className="navbar-right">
                    <NavLink to="/add" className="link"><div>Add Note</div></NavLink>
                    <NavLink to="/view" className="link"><div>View Notes</div></NavLink>
                </div>
                
            </div>
        </div>
    );
}
 
export default Navbar;