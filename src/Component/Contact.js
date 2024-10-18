import React from 'react';
function Contact() {
    return (
        <>

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
            {/* Contact Start  */}
            <div className="container-fluid pt-5 Contacttext">
                <div className="d-flex flex-column text-center mb-5 pt-5">
                    <h2 className="mb-3">Contact Us</h2>
                    <h1 className="display-4 m-0 fw-bold">Contact For <span className="text-warning">Any Query</span></h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 mb-5">
                        <form className="row g-3">
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="validationDefault01" placeholder="Your Name"
                                    required="required" data-validation-required-message="Please enter your name" />
                            </div>
                            <div className="control-group">
                                <input type=" text" className="form-control p-4" id="validationDefault02" placeholder="Email"
                                    required="required" data-validation-required-message="Please enter Link email" />
                            </div>
                            <div className="control-group">
                                <input type=" text" className="form-control p-4" id="validationDefault02" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter Link subject" />
                            </div>
                            <div className="control-group">
                                <textarea className=" form-control p-4" id="validationDefault02" rows="6" placeholder="Message"
                                    required="required" data-validation-required-message="Please enter your message"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn text-white py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-12 mb-n2 p-0">
                    <iframe style={{ width: "100%", height: " 300px", border: "0" }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62528.85907372095!2d79.48412073652342!3d11.619522568594434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726568826744!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" title="Map" ></iframe>
                </div>
            </div>

            {/* Contact End  */}

            {/* Footer Block Start  */}
            <footer id="site-footer">
                <div className="bg-light bg-opacity-25 py-5">
                    <div className="container py-3">
                        <div className="row">
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <h5 className="pb-3"><i className="fa-solid fa-user-group pe-1"></i> About us</h5>
                                <span className="text-secondary">To be the most trusted and convenient online destination.</span>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <h5 className="pb-3"><i className="fa-solid fa-link pe-1"></i> Important links</h5>
                                <ul>
                                    <li className="text-decoration-none link-secondary">About us</li>
                                    <li className="text-decoration-none link-secondary">Privacy policy</li>
                                    <li className="text-decoration-none link-secondary">Terms of services</li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <h5 className="pb-3"><i className="fa-solid fa-location-dot pe-1"></i> Our location</h5>
                                <span className="text-secondary">
                                    140 Street,<br />
                                    Chennai,TamilNadu,<br />
                                    PIN - 600001.<br />
                                </span>
                            </div>
                            <div className="col-xl-3 col-md-6 col-sm-12">
                                <h5 className="pb-3"><i className="fa-solid fa-paper-plane pe-1"></i> Stay updated</h5>
                                <form>
                                    <input type="text" className="w-100 mb-2 form-control footeremail" name="" placeholder="Email ID" />
                                    <button className="w-100 btn btn-dark">Subscribe now</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-warning py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item"><div className="btn btn-outline-secondary"><i className="fa-brands fa-facebook-f"></i></div></li>
                                    <li className="list-inline-item"><div className="btn btn-outline-secondary"><i className="fa-brands fa-youtube"></i></div></li>
                                    <li className="list-inline-item"><div className="btn btn-outline-secondary"><i className="fa-brands fa-twitter"></i></div></li>
                                    <li className="list-inline-item"><div className="btn btn-outline-secondary"><i className="fa-brands fa-linkedin-in"></i></div></li>
                                    <li className="list-inline-item"><div className="btn btn-outline-secondary"><i className="fa-brands fa-github"></i></div></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-12"><span className="text-secondary pt-1 float-md-end float-sm-start">Copyright &copy; 2024</span></div>
                        </div>
                    </div>
                </div>

            </footer>
            {/* Footer Block End */}


        </>
    )
}
export default Contact;