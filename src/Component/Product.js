import React from "react";
import Cart from "./Productadd";
export const Product = () => {
    
    return (
        
        <>
            {/* Nav Bar Starting       */}
          
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
                        <div className="boxProduct">
                            <div className="cart-count">0</div>
                            <i className="fa-solid fa-cart-shopping fs-4" id="cart-icon"></i>
                        </div>
                        <div className="cart">
                            <div className="cart-title">Cart Items </div>
                            <div className="cart-content">
                            </div>
                            <div className="total">
                                <div className="total-title">Total</div>
                                <div className="total-price">Rs.0</div>
                            </div>
                            <button className="btn-buy">Place Order</button>
                            <i className="fa-solid fa-xmark text-dark" id="cart-close"></i>
                        </div>
                    </div>
                </div>
            </nav>
                
            {/* Nav Bar Ending     */}

            {/* Images start    */}

            <div className="container mt-5 mb-5">
                <div className="row text-center">
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 1.jpg" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tomato <span className="text-muted">1 Kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 28.00</span> (₹ 28.00/1 kg).</p>


                                {/* Button trigger modal */}
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
                                                <img src="./assets/img 1.jpg" className="ImageCard w-100" alt="..." />
                                                <h5 className="Veg-title">Tomato</h5>
                                                <p className="Amount fw-bold">Rs.28.00 </p>
                                                <p>(₹ 28.00/1 kg)</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">The lycopene present in tomatoes reduces cellular
                                                    inflammation. It increases iron
                                                    absorption and induces the growth of red blood cells. They are great for
                                                    weight
                                                    loss and maintaining cardiovascular health. The presence of vitamin B1
                                                    provides
                                                    energy to the body. It improves eyesight and bone health. It can protect you
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 2.jfif" className="card-img-top border border-2 border-dark" alt="..." />
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
                                                <img src="./assets/img 2.jfif" className="w-100 ImageCard" alt="..." />
                                                <h5 className="Veg-title">Garlic</h5>
                                                <p className="Amount fw-bold">Rs. 82.00 </p>
                                                <p>(₹ 41.00/100 g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Garlic is a natural blood purifier and it flushes out
                                                    toxins from the body giving you
                                                    spotless skin on the outside. Garlic also combats common cold and flu. It is
                                                    also
                                                    anti bacterial and anti fungal in nature. It is known to reduce cholesterol
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
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
                                                <img src="./assets/img 3.webp" className="w-100 ImageCard" alt="..."/>
                                                <h5 className="Veg-title">Brinjal</h5>
                                                <p className="Amount fw-bold">Rs.80.00</p>
                                                <p> (₹ 20.00/250 g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Brinjal comes with many potential health benefits as it is
                                                    rich in nutrients and is
                                                    high-fiber, low-calorie food . From reducing the risk of heart disease to
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
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
                                                <img src="./assets/img 4.webp" className="w-100 ImageCard" alt="..."/>
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
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 5.webp" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Carrot <span className="text-muted">1 kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 100.00</span> (₹ 25.00/250 g).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal5">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel5">Carrot</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 5.webp" className="w-100 ImageCard" alt="..."/>
                                                <h5 className="Veg-title">Carrot</h5>
                                                <p className="Amount fw-bold">Rs. 100.00 </p>
                                                <p>(₹ 25.00/250 g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">It can combat age and environment-related damage to the
                                                    eyes as well as macular
                                                    degeneration, a common reason behind age-related vision loss. Better
                                                    Cardiovascular Health: Carrots are loaded with phytochemicals that reduce
                                                    the risk
                                                    of heart diseases.</p>
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 6.jpg" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bottle Gourd <span className="text-muted">1 Kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 32.00</span> (₹ 8.00/250 g).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal6">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel6">Bottle Gourd</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 6.jpg" className="w-100 ImageCard" alt="..."/>
                                                <h5 className="Veg-title">Bottle Gourd</h5>
                                                <p className="Amount fw-bold">Rs. 32.00 </p>
                                                <p> (₹ 8.00/250 g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Bottle Gourd is used in low calorie diets. It is rich in
                                                    fiber, minerals, iron and protein.
                                                    It prevents constipation, digestive disorders, and helps in treating urine
                                                    acidity.
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 7.jpg" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Beetroot <span className="text-muted">1 kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 90.00</span></p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal7">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel7">Beetroot</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 7.jpg" className="w-100 ImageCard" alt="..."/>
                                                <h5 className="Veg-title">Beetroot</h5>
                                                <p className="Amount fw-bold">Rs. 90.00 </p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Beetroots have negligible fat and tons of fiber. It
                                                    contains phosphorus, iron, magnesium. It helps in beating LDL Cholestrol,
                                                    constipation and inflammation. </p>
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/onion.jfif" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Onion <span className="text-muted"> 1 kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 58.00</span> (₹ 14.50/250g).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal8">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel8">Onion</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/onion.jfif" className="w-100 ImageCard" alt="..." />
                                                <h5 className="Veg-title">Onion</h5>
                                                <p className="Amount fw-bold">Rs. 58.00 </p>
                                                <p> (₹ 14.50/250g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Onions are rich in carbohydrates, sugar, vitamin C, fiber,
                                                    and minerals (potassium,
                                                    magnesium, phosphorus, & calcium). It serves as an anti-inflammatory,
                                                    boosting
                                                    the immune system. They promote digestion and enrich gut health. They are
                                                    also
                                                    anti-microbial and enhance bone health.</p>
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 9.jpg" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Beans <span className="text-muted">1 kg</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 100.00</span> (₹ 50.00/500g).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal9">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal9" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel9">Beans</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 9.jpg" className="w-100 ImageCard" alt="..."/>
                                                <h5 className="Veg-title">Beans</h5>
                                                <p className="Amount fw-bold">Rs. 100.00 </p>
                                                <p> (₹ 50.00/500g).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">With liberal amount of vitamin C, low carb and calorific
                                                    value they are ideal to
                                                    incorporate into your weight loss diet. They also wards of free radicals
                                                    resulting in
                                                    good absorption of calcium and iron in body.</p>
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
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 10.jfif" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cauliflower <span className="text-muted"> 1pc (Approx 600 g - 1000 g)</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 26.00</span> (₹ 40.00).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal10">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel10">Cauliflower</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 10.jfif" className="w-100 ImageCard" alt="..."/>
                                                <h5 className="Veg-title">Cauliflower</h5>
                                                <p className="Amount fw-bold">Rs. 26.00 </p>
                                                <p>(₹ 40.00).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">High nutrient density. anti-inflammation effects. Ability
                                                    to fight heart disease and cancer. Anti-aging properties.</p>
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
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 11.jfif" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Sweet Corn <span className="text-muted"> 1pc (Approx 250 g - 450 g)</span>
                                </h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 14.00</span> (₹ 14.00).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal11">
                                    View More
                                </button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal11" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel11">Sweet Corn</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 11.jfif" className="w-100 ImageCard" alt="..." />
                                                <h5 className="Veg-title">Sweet Corn</h5>
                                                <p className="Amount fw-bold">Rs. 14.00 </p>
                                                <p> (₹ 14.00).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">Sweet Corn has around 125-150 calories and is power-packed
                                                    with fiber, which helps
                                                    keep your digestive system healthy. It also has antioxidants including
                                                    bioflavonoids
                                                    and carotenoids that help keep health hazards at bay.</p>
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
                    <div className="col-12 mb-5 col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="card p-2 border border-danger" style={{width:"100%",height: "100%"}}>
                            <img src="./assets/img 12.jpg" className="card-img-top border border-2 border-dark" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cabbage <span className="text-muted"> 1pc (Approx 600 g - 1000 g)</span></h5>
                                <p className="card-text">M.R.P:<span className="fw-bold">₹ 26.00</span> (₹ 26.00).</p>

                                {/* Button trigger modal  */}
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal12">
                                    View More
                                </button>

                                {/* Modal */}
                                <div className="modal fade" id="exampleModal12" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel12">Cabbage</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <img src="./assets/img 12.jpg" className="w-100 ImageCard" alt="..."/>
                                                <h5 className="Veg-title">Cabbage</h5>
                                                <p className="Amount fw-bold">Rs. 26.00 </p>
                                                <p>(₹ 26.00).</p>
                                                <h5>Benefits</h5>
                                                <p className="text-muted">The inexpensiveness and health benefits of cabbage earned
                                                    it its nickname “drug
                                                    of the poor” during the Middle Ages. Cabbage improves digestion, helps in
                                                    weight
                                                    loss, reduces inflammation and heals ulcer.
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
            {/* Images End */}
           
            <Cart />;
        </>
        
    );
};

export default Product;
