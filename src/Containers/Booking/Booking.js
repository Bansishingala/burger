import { Form, Formik ,useFormik} from 'formik';
import React from 'react';
import * as yup from 'yup';

function Booking(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Your Name"),
        email: yup.string().email("Please Enter Valid Email").required("Please Enter Your Email"),
        mobile: yup.string().required("Please Enter Your Mobile Number"),
        date: yup.string().required("Please Select Date"),
        time: yup.string().required("Please Select Time"),
        guest: yup.string().required("Please Select Guest"),
       
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            date: '',
            time: '',
            guest: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema:schema,
        enableReinitialize:true,
    });

    const { handleSubmit , handleBlur , handleChange , errors , touched} = formik
    return (
        <div>
            <main>
                {/* Page Header Start */}
                <div className="page-header mb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Book A Table</h2>
                            </div>
                            <div className="col-12">
                                <a href>Home</a>
                                <a href>Booking</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}

                {/* Booking Start */}
                <div className="booking">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="booking-content">
                                    <div className="section-header">
                                        <p>Book A Table</p>
                                        <h2>Book Your Table For Private Dinners &amp; Happy Hours</h2>
                                    </div>  
                                    <div className="about-text">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="booking-form">
                                    <Formik values={formik}>    
                                        <Form action method="post" onSubmit={handleSubmit} role="form" className="php-email-form">
                                            <div className="control-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Name" onChange={handleChange} 
                                                    onBlur={handleBlur}/>
                                                    <div className="input-group-append">
                                                        <div className="input-group-text"><i className="far fa-user" /></div>
                                                    </div>
                                                </div>
                                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                            </div>
                                            <div className="control-group">
                                                <div className="input-group">
                                                    <input type="email" className="form-control" placeholder="Email" onChange={handleChange} 
                                                    onBlur={handleBlur} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text"><i className="far fa-envelope" /></div>
                                                    </div>
                                                </div>
                                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                                            </div>
                                            <div className="control-group">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Mobile" onChange={handleChange} 
                                                    onBlur={handleBlur}/>
                                                    <div className="input-group-append">
                                                        <div className="input-group-text"><i className="fa fa-mobile-alt" /></div>
                                                    </div>
                                                </div>
                                                <p>{errors.mobile && touched.mobile ? errors.mobile : ''}</p>
                                            </div>
                                            <div className="control-group">
                                                <div className="input-group date" id="date" data-target-input="nearest">
                                                    <input type="text" className="form-control datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker"  onChange={handleChange} 
                                                    onBlur={handleBlur}/>
                                                    <div className="input-group-append" data-target="#date" data-toggle="datetimepicker">
                                                        <div className="input-group-text"><i className="far fa-calendar-alt" /></div>
                                                    </div>
                                                </div>
                                                <p>{errors.date && touched.date ? errors.date : ''}</p>
                                            </div>
                                            <div className="control-group">
                                                <div className="input-group time" id="time" data-target-input="nearest">
                                                    <input type="text" className="form-control datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" onChange={handleChange} 
                                                    onBlur={handleBlur} />
                                                    <div className="input-group-append" data-target="#time" data-toggle="datetimepicker">
                                                        <div className="input-group-text"><i className="far fa-clock" /></div>
                                                    </div>
                                                </div>
                                                <p>{errors.time && touched.time ? errors.time : ''}</p>
                                            </div>
                                            <div className="control-group">
                                                <div className="input-group">
                                                    <select className="custom-select form-control" onChange={handleChange} 
                                                    onBlur={handleBlur}>
                                                        <option selected>Guest</option>
                                                        <option value={1}>1 Guest</option>
                                                        <option value={2}>2 Guest</option>
                                                        <option value={3}>3 Guest</option>
                                                        <option value={4}>4 Guest</option>
                                                        <option value={5}>5 Guest</option>
                                                        <option value={6}>6 Guest</option>
                                                        <option value={7}>7 Guest</option>
                                                        <option value={8}>8 Guest</option>
                                                        <option value={9}>9 Guest</option>
                                                        <option value={10}>10 Guest</option>
                                                    </select>
                                                    <div className="input-group-append">
                                                        <div className="input-group-text"><i className="fa fa-chevron-down" /></div>
                                                    </div>
                                                </div>
                                                <p>{errors.guest && touched.guest ? errors. guest : ''}</p>
                                            </div>
                                            <div>
                                                <button className="btn custom-btn" type="submit">Book Now</button>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Booking End */}
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

export default Booking;