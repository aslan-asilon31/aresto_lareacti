import '../assets/frontend/lib/animate/animate.min.css';
import '../assets/frontend/lib/owlcarousel/assets/owl.carousel.min.css';
import '../assets/frontend/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
import '../assets/frontend/css/bootstrap.min.css';
import '../assets/frontend/css/style.css';


// IMG
import aresto_logo_black from '../assets/frontend/img/aresto_logo_black.png';
import hero from '../assets/frontend/img/hero.png';
import about_1 from '../assets/frontend/img/about-1.jpg';
import about_2 from '../assets/frontend/img/about-2.jpg';
import about_3 from '../assets/frontend/img/about-3.jpg';
import about_4 from '../assets/frontend/img/about-4.jpg';

import menu_1 from '../assets/frontend/img/menu-1.jpg';
import menu_2 from '../assets/frontend/img/menu-2.jpg';
import menu_3 from '../assets/frontend/img/menu-3.jpg';
import menu_4 from '../assets/frontend/img/menu-4.jpg';
import menu_5 from '../assets/frontend/img/menu-5.jpg';
import menu_6 from '../assets/frontend/img/menu-6.jpg';
import menu_7 from '../assets/frontend/img/menu-7.jpg';
import menu_8 from '../assets/frontend/img/menu-8.jpg';

import team_1 from '../assets/frontend/img/team-1.jpg';
import team_2 from '../assets/frontend/img/team-2.jpg';
import team_3 from '../assets/frontend/img/team-3.jpg';
import team_4 from '../assets/frontend/img/team-4.jpg';

import testimonial_1 from '../assets/frontend/img/testimonial-1.jpg';
import testimonial_2 from '../assets/frontend/img/testimonial-2.jpg';
import testimonial_3 from '../assets/frontend/img/testimonial-3.jpg';
import testimonial_4 from '../assets/frontend/img/testimonial-4.jpg';

export default function Welcome() {
    return (
        <>
    <div className="container-xxl bg-white p-0">

{/* <!-- Navbar & Hero Start --> */}
<div className="container-xxl position-relative p-0" style={{ backgroundColor:'#61DAFB' }}>
    <nav className="navbar">
        <a href="" className="navbar-brand p-0">
            
             <img src={aresto_logo_black} alt="Logo " />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
        </button>
            <div className="d-flex" style={{  width:"50%",fontSize:"30px"}}>
                <a href="index.html" className=" active" style={{ color:"black" }}>Home</a>
                <a href="about.html" className="ml-10" style={{ color:"black" }}>About</a>
                <a href="service.html" className="ml-10" style={{ color:"black" }}>Service</a>
                <a href="menu.html" className="ml-10" style={{ color:"black" }}>Menu</a>
                <a href="contact.html" className="ml-10" style={{ color:"black" }}>Contact</a>
            </div>
            <a href="login" className="btn btn-primary py-2 px-4" style={{ color:"black" }}>Login | Register</a>
    </nav>

    <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-0 py-5">
            <div className="row align-items-center g-5">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                    <p className="text-white animated slideInLeft mb-4 pb-2">
                    Welcome to Aresto, the epitome of a 5-star restaurant experience. Indulge in a gastronomic journey as we bring you the finest flavors from Asia, America, and Europe. Our meticulously crafted menu showcases a diverse selection of mouthwatering dishes, from delectable Asian delicacies like sushi and stir-fried noodles to classic American favorites such as juicy burgers and tender grilled steaks. For those seeking a taste of Europe, our gourmet pastas, perfectly roasted meats, and irresistible desserts will transport you to the heart of the continent.
                    </p>
                    <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft" style={{ color:"black" }}>Book A Table</a>
                </div>
                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid" src={hero} alt="" />
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Navbar & Hero End --> */}

{/* <!-- Service Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                        <h5>Master Chefs</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                        <h5>Quality Food</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                        <h5>Online Order</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item rounded pt-3">
                    <div className="p-4">
                        <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                        <h5>24/7 Service</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Service End --> */}

{/* <!-- About Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6">
                <div className="row g-3">
                    <div className="col-6 text-start">
                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={about_1} />
                    </div>
                    <div className="col-6 text-start">
                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={about_2} style={{ marginTop:"25%" }} />
                    </div>
                    <div className="col-6 text-end">
                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={about_3} />
                    </div>
                    <div className="col-6 text-end">
                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={about_4} />
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Aresto</h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="row g-4 mb-4">
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                            <div className="ps-4">
                                <p className="mb-0">Years of</p>
                                <h6 className="text-uppercase mb-0">Experience</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                            <div className="ps-4">
                                <p className="mb-0">Popular</p>
                                <h6 className="text-uppercase mb-0">Master Chefs</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
            </div>
        </div>
    </div>
</div>
{/* <!-- About End --> */}


{/* <!-- Menu Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu <img src={aresto_logo_black} />  </h5>
            <h1 className="mb-5">Most Popular Items</h1>
        </div>
        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                        <i className="fa fa-coffee fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Popular</small>
                            <h6 className="mt-n1 mb-0">Breakfast</h6>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                        <i className="fa fa-hamburger fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Special</small>
                            <h6 className="mt-n1 mb-0">Launch</h6>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                        <i className="fa fa-utensils fa-2x text-primary"></i>
                        <div className="ps-3">
                            <small className="text-body">Lovely</small>
                            <h6 className="mt-n1 mb-0">Dinner</h6>
                        </div>
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_1} style={{width:"30%",}} />
                                <div className="w-200 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Steak Sapi Wagyu  <h6 className="" style={{ textDecoration:"line-through", textDecorationThickness:"2px", }}>Rp 250</h6> <br/></span>
                                        
                                        <h4 className="" style={{color:"red" ,width:"180px", height:"30px",textAlign:"center"}}>Rp 175 </h4>
                                        <h3>OFF 30%</h3>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded " src={menu_2} style={{width:"30%"}} />
                                <div className="w-200 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                    <span>Sate Sapi Madura  <h6 className="" style={{ textDecoration:"line-through", textDecorationThickness:"2px", }}>Rp 80k</h6> <br/></span>
                                        
                                        <h4 className="" style={{color:"red" ,width:"180px", height:"30px",textAlign:"center"}}>Rp 56k </h4>
                                        <h3>OFF 30%</h3>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_3} style={{width:"30%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                    <span>Gule Kambing Sapi  <h6 className="" style={{ textDecoration:"line-through", textDecorationThickness:"2px", }}>Rp 120k</h6> <br/></span>
                                        
                                        <h4 className="" style={{color:"red" ,width:"180px", height:"30px",textAlign:"center"}}>Rp 96k </h4>
                                        <h3>OFF 20%</h3>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_4} style={{width:"30%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                    <span>Sapi Lada Hitam  <h6 className="" style={{ textDecoration:"line-through", textDecorationThickness:"2px", }}>Rp 150k</h6> <br/></span>
                                        
                                        <h4 className="" style={{color:"red" ,width:"180px", height:"30px",textAlign:"center"}}>Rp 105k </h4>
                                        <h3>OFF 30%</h3>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_1} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_2} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_3} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_4} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_5} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_6} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_7} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_8} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_1} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_2} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_3} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_4} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_5} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_6} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_7} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center">
                                <img className="flex-shrink-0 img-fluid rounded" src={menu_8} style={{width:"50%"}} />
                                <div className="w2100 d-flex flex-column text-start ps-4">
                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                        <span>Chicken Burger <h6 className="">Rp 115k</h6> <br/></span>
                                        
                                        <h5 className="" style={{backgroundColor:"red" ,width:"150px"}}>Rp 60k</h5>
                                    </h5>
                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Menu End --> */}


{/* <!-- Reservation Start --> */}
<div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0">
        <div className="col-md-6">
            <div className="video">
                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                    <span></span>
                </button>
            </div>
        </div>
        <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                <h1 className="text-white mb-4">Book A Table Online</h1>
                <form>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                <label for="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                <label for="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                <label for="datetime">Date & Time</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" id="select1">
                                    <option value="1">People 1</option>
                                    <option value="2">People 2</option>
                                    <option value="3">People 3</option>
                                </select>
                                <label for="select1">No Of People</label>
                                </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: "100px" }} ></textarea>
                                <label for="message">Special Request</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content rounded-0">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {/* <!-- 16:9 aspect ratio --> */}
                <div className="ratio ratio-16x9">
                    <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                        allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Reservation Start --> */}


{/* <!-- Team Start --> */}
<div className="container-xxl pt-5 pb-3">
    <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
            <h1 className="mb-5">Our Master Chefs</h1>
        </div>
        <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                        <img className="img-fluid" src={team_1} alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                        <img className="img-fluid" src={team_2} alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                        <img className="img-fluid" src={team_3} alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                        <img className="img-fluid" src={team_4} alt="" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Team End --> */}


{/* <!-- Testimonial Start --> */}
<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
        <div className="text-center">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item bg-transparent border rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial_1} style={{ width:"50px",height:"50px", }} />
                    <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <small>Profession</small>
                    </div>
                </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial_2} style={{ width:"50px",height:"50px", }} />
                    <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <small>Profession</small>
                    </div>
                </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial_3} style={{ width:"50px",height:"50px", }} />
                    <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <small>Profession</small>
                    </div>
                </div>
            </div>
            <div className="testimonial-item bg-transparent border rounded p-4">
                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src={testimonial_4} style={{ width:"50px",height:"50px", }} />
                    <div className="ps-3">
                        <h5 className="mb-1">Client Name</h5>
                        <small>Profession</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Testimonial End --> */}


{/* <!-- Footer Start --> */}
<div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Reservation</a>
                <a className="btn btn-link" href="">Privacy Policy</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Jakarta, Indonesia</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-2">
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                    <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                <p>09AM - 09PM</p>
                <h5 className="text-light fw-normal">Sunday</h5>
                <p>10AM - 08PM</p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className="position-relative mx-auto" style={{ maxWidth: "400px" }} >
                    <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="copyright">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">AslanAsilon</a>, 
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <div className="footer-menu">
                        <a href="">Home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* // <!-- Footer End --> */}


{/* // <!-- Back to Top --> */}
<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

</div>


            <style>{`

            `}</style>
        </>
    );
}
