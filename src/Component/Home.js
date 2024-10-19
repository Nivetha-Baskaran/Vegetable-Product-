import React from 'react';

const Home = () => {
    return (

        <><body>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href=" ">
                        <img src="./assets/veg logo 5.png" alt="" width="35" height="30" className="d-inline-block align-text-top" />
                        <b className="fs-3">Organic Product</b>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-xl-0 ms-auto p-2 fs-4">
                            <li className="nav-item">
                                <a className="nav-link" href="./">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Product">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./Login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Video Starting */}

            <div className="VideoContainer">
                <video src="./assets/video veg.mp4" autoPlay muted loop></video>
                <h1 className="text"><i>Organic Food Is Good For Health</i></h1>
            </div>
            {/* Video Ending */}

            {/* Services  start  */}

            <div className="container-fluid box mt-5 mb-5 d-flex gap-5 justify-content-center">

                <div className="card text-center" style={{ width: " 100%;" }}>
                    <i className="fa-solid fa-car-side fs-1 text-danger mt-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Free Shipping</h5>
                        <p className="card-text">Free on order over <span className="fw-bold">₹ </span>500.</p>
                    </div>
                </div>

                <div className="card text-center" style={{ width: " 100%;" }}>
                    <i className="fa-solid fa-user-shield fs-1 text-danger mt-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Security Payment</h5>
                        <p className="card-text">100% security payment.</p>
                    </div>
                </div>

                <div className="card text-center" style={{ width: " 100%;" }}>
                    <i className="fa-solid fa-right-left fs-1 text-danger mt-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">3 Day Return</h5>
                        <p className="card-text">3 day money guarantee.</p>
                    </div>
                </div>


                <div className="card text-center" style={{ width: " 100%;" }}>
                    <i className="fa-solid fa-phone-volume fs-1 text-danger mt-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">24/7 Support</h5>
                        <p className="card-text">Support every time fast.</p>
                    </div>
                </div>
            </div>

            {/* Services  Ending  */}


            {/* Our Product Starting  */}
            <header>
                <h1 className="text-center text-primary fs-1">Our Products</h1>
            </header>

            <div className="container mt-5 mb-5">
                <div className="row text-center">
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card p-2 border border-danger" style={{ width: "100%", height: "100%;" }}>
                            <img src="./assets/img 1.jpg" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tomato <span className="text-muted">1 Kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 28.00</span> (₹ 28.00/1 kg).</p>


                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Tomato</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 1.jpg" className="ImageCard w-100" alt="img1" />
                                                <h5 className="Veg-title">Tomato</h5>
                                                <p className="Amount fw-bold"> Rs.28.00 </p>
                                                <p>(₹  28.00/1 kg)</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">The lycopene present in tomatoes reduces cellular
                                                    inflammation. It increases iron
                                                    absorption and induces the growth of red blood cells. They are great for
                                                    weight
                                                    loss and maintaining cardiovascular health. The presence of vitamin B1
                                                    provides
                                                    energy href the body. It improves eyesight and bone health. It can protect you
                                                    from
                                                    urinary infections and lowers the risk of diabetes.</p>
                                                <button type="button" className="btn btn-primary add-cart">Add To Cart</button>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card p-2 border border-danger" style={{ width: "100%", height: "100%" }}>
                            <img src="./assets/img 2.jfif" class="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Garlic <span className="text-muted">200 g</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 82.00</span> (₹ 41.00/100 g).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel2">Garlic</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 2.jfif" className="w-100 ImageCard" alt="img2" />
                                                <h5 className="Veg-title">Garlic</h5>
                                                <p className="Amount fw-bold">Rs. 82.00 </p>
                                                <p>(₹ 41.00/100 g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Garlic is a natural blood purifier and it flushes out
                                                    toxins from the body giving you
                                                    spotless skin on the outside. Garlic also combats common cold and flu. It is
                                                    also
                                                    anti bacterial and anti fungal in nature. It is known href reduce cholesterol
                                                    level and
                                                    blood pressure thereby preventing heart diseases.
                                                </p>
                                                <button type="button" className="btn btn-primary add-cart">Add To Cart</button>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card p-2 border border-danger" style={{ width: "100%", height: "100%" }}>
                            <img src="./assets/img 3.webp" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Brinjal <span className="text-muted">80 Kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 80.00</span> (₹ 20.00/250 g).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal3">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel3">Brinjal</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 3.webp" className="w-100 ImageCard" alt="img3" />
                                                <h5 className="Veg-title">Brinjal</h5>
                                                <p className="Amount fw-bold">Rs.80.00</p>
                                                <p> (₹ 20.00/250 g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Brinjal comes with many potential health benefits as it is
                                                    rich in nutrients and is
                                                    high-fiber, low-calorie food . From reducing the risk of heart disease href
                                                    helping with
                                                    blood sugar control and weight loss. Brinjal also contains many
                                                    anti-inflammation
                                                    substances such as cholinesterase which in results inflammation</p>
                                                <button type="button" className="btn btn-primary add-cart">Add To Cart</button>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card p-2 border border-danger" style={{ width: "100%", height: "100%" }}>
                            <img src="./assets/img 4.webp" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lady's Finger/Okra <span className="text-muted">250 g</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 7.00</span> (₹ 2.80/100 g).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal4">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel4">Lady's Finger/Okra</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 4.webp" className="w-100 ImageCard" alt="img4" />
                                                <h5 className="Veg-title">Lady's Finger/Okra</h5>
                                                <p className="Amount fw-bold">Rs. 7.00 </p>
                                                <p>(₹ 2.80/100 g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Okra contains a good amount of vitamin K and C as well as
                                                    Iron and Folate which
                                                    boosts blood health and prevent anemia and increases immunity. Okra being
                                                    high
                                                    in fiber also helps regulate blood sugar and keep heart healthy.
                                                </p>
                                                <button type="button" className="btn btn-primary add-cart">Add To Cart</button>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Product Ending  */}

            <div className="button m-5">
                <button><a href="./Product">View All Products</a></button>
                <button><a href="./Contact">Contact Us</a></button>
            </div>

        </body></>


    );
};



export default Home;
