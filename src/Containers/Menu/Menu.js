import React from 'react';

function Menu(props) {
    return (
        <div>
            <main>

                {/* Page Header Start */}
                <div className="page-header mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Food Menu</h2>
                            </div>
                            <div className="col-12">
                                <a href>Home</a>
                                <a href>Menu</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}

                {/* Food Start */}
                <div className="food mt-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="food-item">
                                    <i className="flaticon-burger" />
                                    <h2>Burgers</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.
                                    </p>
                                    <a href>View Menu</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="food-item">
                                    <i className="flaticon-snack" />
                                    <h2>Snacks</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.
                                    </p>
                                    <a href>View Menu</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="food-item">
                                    <i className="flaticon-cocktail" />
                                    <h2>Beverages</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non vulputa. Aliquam metus tortor auctor quis sem.
                                    </p>
                                    <a href>View Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Food End */}
                {/* Menu Start */}
                <div className="menu">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Food Menu</p>
                            <h2>Delicious Food Menu</h2>
                        </div>
                        <div className="menu-tab">
                            <ul className="nav nav-pills justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#burgers">Burgers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#snacks">Snacks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#beverages">Beverages</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="burgers" className="container tab-pane active">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-burger.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Mini cheese Burger</span> <strong>$9.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-burger.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Double size burger</span> <strong>$11.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-burger.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Bacon, EGG and Cheese</span> <strong>$13.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-burger.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Pulled porx Burger</span> <strong>$18.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-burger.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Fried chicken Burger</span> <strong>$22.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-block">
                                            <img src="img/menu-burger-img.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                                <div id="snacks" className="container tab-pane fade">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-snack.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Corn Tikki - Spicy fried Aloo</span> <strong>$15.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-snack.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Bread besan Toast</span> <strong>$35.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-snack.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Healthy soya nugget snacks</span> <strong>$20.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-snack.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Tandoori Soya Chunks</span> <strong>$30.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-block">
                                            <img src="img/menu-snack-img.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                                <div id="beverages" className="container tab-pane fade">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-beverage.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Single Cup Brew</span> <strong>$7.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-beverage.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Caffe Americano</span> <strong>$9.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-beverage.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Caramel Macchiato</span> <strong>$15.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-beverage.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Standard black coffee</span> <strong>$8.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                            <div className="menu-item">
                                                <div className="menu-img">
                                                    <img src="img/menu-beverage.jpg" alt="Image" />
                                                </div>
                                                <div className="menu-text">
                                                    <h3><span>Standard black coffee</span> <strong>$12.00</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-block">
                                            <img src="img/menu-beverage-img.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Menu End */}
            </main>

        </div>
    );
}

export default Menu;