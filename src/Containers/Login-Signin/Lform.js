import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, useFormik, Formik } from 'formik';

function Lform(props) {
    const [user, setUser] = useState('login');
    const [reset, setReset] = useState(false)


    let schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().password().required(),
       
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    const { handleSubmit} = formik ;
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
                                                />
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
                                    />
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
                                            />
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