import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/services">services</Link>
                    <Link to="/portfolio">portfolio</Link>
                    <Link to="/contact">contact</Link>
                    <Link to="/mentionslegales">Mentions Légales</Link>
                </nav>
            </header>    
        </>
    )
}

export default Nav;