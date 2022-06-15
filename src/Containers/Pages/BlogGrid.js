import React from 'react';

function BlogGrid(props) {
    return (
        <div>
            <main>
                {/* Page Header Start */}
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>Food Blog</h2>
                            </div>
                            <div className="col-12">
                                <a href>Home</a>
                                <a href>Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Blog Start */}
                <div className="blog">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Food Blog</p>
                            <h2>Latest From Food Blog</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="img/blog-1.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                        <div className="blog-meta">
                                            <p><i className="far fa-user" />Admin</p>
                                            <p><i className="far fa-list-alt" />Food</p>
                                            <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
                                            <p><i className="far fa-comments" />10</p>
                                        </div>
                                        <div className="blog-text">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                            </p>
                                            <a className="btn custom-btn" href>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="img/blog-2.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                        <div className="blog-meta">
                                            <p><i className="far fa-user" />Admin</p>
                                            <p><i className="far fa-list-alt" />Food</p>
                                            <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
                                            <p><i className="far fa-comments" />10</p>
                                        </div>
                                        <div className="blog-text">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                            </p>
                                            <a className="btn custom-btn" href>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="img/blog-3.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                        <div className="blog-meta">
                                            <p><i className="far fa-user" />Admin</p>
                                            <p><i className="far fa-list-alt" />Food</p>
                                            <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
                                            <p><i className="far fa-comments" />10</p>
                                        </div>
                                        <div className="blog-text">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                            </p>
                                            <a className="btn custom-btn" href>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="img/blog-4.jpg" alt="Blog" />
                                    </div>
                                    <div className="blog-content">
                                        <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                                        <div className="blog-meta">
                                            <p><i className="far fa-user" />Admin</p>
                                            <p><i className="far fa-list-alt" />Food</p>
                                            <p><i className="far fa-calendar-alt" />01-Jan-2045</p>
                                            <p><i className="far fa-comments" />10</p>
                                        </div>
                                        <div className="blog-text">
                                            <p>
                                                Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                            </p>
                                            <a className="btn custom-btn" href>Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog End */}
            </main>

        </div>
    );
}

export default BlogGrid;