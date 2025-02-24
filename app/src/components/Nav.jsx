import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header>
            <nav class="navbar navbar-expand-lg bg-dark"  data-bs-theme="dark">
                <div class="container-fluid ">
                    <span class="navbar-brand mb-0 h1 text-white" >John Doe</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>                
                    <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <Link to="/" class="nav-link text-white" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services" class="nav-link text-white" >services</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/portfolio" class="nav-link text-white">portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link text-white" >contact</Link>    
                            </li>
                            <li class="nav-item">
                                <Link to="/mentionslegales" class="nav-link text-white" >Mentions Légales</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </header>    
        </>
    )
}

export default Nav;