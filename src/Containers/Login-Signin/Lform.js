import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, useFormik, Formik } from 'formik';

function Lform(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)


    let schemaobj, intialval;
    if (user === "login") {
        schemaobj = {
            email: yup.string().email("please enter valid Email Id").required("please enter Email Id"),
            password: yup.string().required("Please enter Password"),
        }
        intialval = {
            email: '',
            password: ''
        }
    } else if (user === "signup") {
        schemaobj = {
            name: yup.string().required("please enter your name"),
            email: yup.string().email("please enter valid Email Id").required("please enter Email Id"),
            password: yup.string().required("Please enter Password"),
        }
        intialval = {
            name: '',
            email: '',
            password: ''
        }
    }
    
    const handleLogin = () => {
        localStorage.setItem("user", "1234567890")
    }
    const handleData = (values) => {
        let localData = JSON.parse(localStorage.getItem("user"));


        if (localData === null) {
            localStorage.setItem("user", JSON.stringify([values]))
        } else {
            localData.push(values)
            localStorage.setItem("user", JSON.stringify("localData"));

        }
    }

    let schema = yup.object().shape(schemaobj);
    const formik = useFormik({
        initialValues: intialval,
        validationSchema: schema,
        onSubmit: values => {
            if (user === 'login') {
                handleLogin()
            } else {
                handleData(values)
            }
        },
        enableReinitialize:true
    });
    const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;
    return (
        <main>
            <div className="page-header mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Login</h2>
                        </div>
                        <div className="col-12">
                            <a href>Home</a>
                            <a href>Login</a>
                        </div>
                    </div>
                </div>
            </div>
            <center>
                <section>
                    <div className="container">
                        <div className="section-title">
                            {reset === "true" ?
                                <h2 className='mt-5 mb-4'>Forgot password</h2> :
                                user === "login" ?
                                    <h2 className='mt-5 mb-4'>login</h2> :
                                    <h2 className='mt-5 mb-4'>Signup</h2>
                            }
                        </div>
                        <Formik values={formik}>
                            <Form action method="post" onSubmit={handleSubmit} role="form" className="php-email-form">
                                {
                                    reset === "true" ?
                                        null :
                                        user === "login" ?
                                            null
                                            :
                                            <div className="col-md-4 form-group">
                                                <input type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                {errors.name && touched.name ? <p className='text-danger'>{errors.name}</p> : ''}
                                                <div className="validate" />
                                            </div>
                                }
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : ''}

                                    <div className="validate" />
                                </div>
                                {
                                    reset === "true" ?
                                        null :
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Your password"
                                                data-rule="password"
                                                data-msg="Please enter a password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.password && touched.password ? <p className='text-danger'>{errors.password}</p> : ""}
                                            <div className="validate" />
                                        </div>
                                }

                                {
                                    reset === "true" ?
                                        <div class="text-center"> <button className="btn custom-btn p-2" type="submit">Submit</button></div>
                                        :
                                        user === "login" ?
                                            <div class="text-center"><button className="btn custom-btn" type="submit">Login</button></div>
                                            :
                                            <div class="text-center"><button className="btn custom-btn" type="submit">Signup</button></div>
                                }
                                {

                                    user === "login" ?
                                        <div className="text-center mt-5">
                                            <span>Creat a new Account ? <button className='btn custom-btn  p-1 fs-4' onClick={() => { setReset('false'); setUser("signup") }}>Signup</button></span>
                                        </div>
                                        :
                                        <div className="text-center mt-4 ">
                                            <span>Already a account </span><button className='btn custom-btn  p-1 ' onClick={() => { setReset('false'); setUser("login") }}>Login</button>
                                        </div>
                                }
                                <div className="text-center"><button type="submit" className='btn custom-btn mt-4 p-1  ' onClick={() => setReset('true')}>Forgot password</button></div>

                            </Form>
                        </Formik>
                    </div>
                </section>
            </center>
        </main>

    );
}

export default Lform;