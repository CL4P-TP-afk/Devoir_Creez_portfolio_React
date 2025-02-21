import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1" >John Doe</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/services" class="nav-link active" aria-current="page">services</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/portfolio" class="nav-link active" aria-current="page">portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link active" aria-current="page">contact</Link>    
                            </li>
                            <li class="nav-item">
                                <Link to="/mentionslegales" class="nav-link active" aria-current="page">Mentions Légales</Link>
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