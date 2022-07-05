import {NavLink} from 'react-router-dom';

const Navbar = () => {
       
    const navLinkStyles= ({isActive}) =>{
       return({
           fontWeight: isActive? 'bold':'normal',
              color: isActive? '#fff':'#000'
       }
       )
    }


    return(
        <nav>
            <NavLink style={navLinkStyles} to="/">Home</NavLink>
            <NavLink style={navLinkStyles} to="/blog">Blog</NavLink>
            <NavLink  style={navLinkStyles} to="/about">About</NavLink>
            <NavLink style={navLinkStyles} to="contact">Contact</NavLink>
        </nav>
    )
}

export default Navbar;