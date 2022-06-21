import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header>
                {/* Nav Bar Start */}
                <div className="navbar navbar-expand-lg bg-light navbar-light">
                    <div className="container-fluid">
                        <a href="index.html" className="navbar-brand">Burger <span>King</span></a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav ml-auto">
                                <NavLink className="nav-item nav-link active" to={'/'}>Home</NavLink>
                                {/* <a href="index.html" className="nav-item nav-link active">Home</a> */}

                                <NavLink className="nav-item nav-link " to={'/About'}>About</NavLink>
                                {/* <a href="about.html" className="nav-item nav-link">About</a> */}

                                <NavLink className="nav-item nav-link " to={'/Feature'}>Feature</NavLink>
                                {/* <a href="feature.html" className="nav-item nav-link">Feature</a> */}

                                <NavLink className="nav-item nav-link " to={'/Chef'}>Chef</NavLink>
                                {/* <a href="team.html" className="nav-item nav-link">Chef</a> */}

                                <NavLink className="nav-item nav-link " to={'/Menu'}>Menu</NavLink>
                                {/* <a href="menu.html" className="nav-item nav-link">Menu</a> */}

                                <NavLink className="nav-item nav-link " to={'/Booking'}>Booking</NavLink>
                                {/* <a href="booking.html" className="nav-item nav-link">Booking</a> */}
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu">

                                <NavLink className="dropdown-item" to={'/BlogG'}>Blog Grid</NavLink>
                                        {/* <a href="blog.html" className="dropdown-item">Blog Grid</a> */}

                                        <NavLink className="dropdown-item" to={'/BlogD'}>Blog Detail</NavLink>
                                        {/* <a href="single.html" className="dropdown-item">Blog Detail</a> */}
                                    </div>
                                </div>
                                <NavLink className="nav-item nav-link " to={'/Contact'}>Contact</NavLink>
                                {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                                <NavLink className="nav-item nav-link " to={'/Login'}>Login</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Nav Bar End */}
            </header>

        </div>
    );
}

export default Header;