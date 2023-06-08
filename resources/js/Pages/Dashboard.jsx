import React from 'react'
import '@/assets/backend/vendor/fonts/boxicons.css'
import '@/assets/backend/vendor/css/core.css'
import '@/assets/backend/vendor/css/theme-default.css'
import '@/assets/backend/css/demo.css'
import '@/assets/backend/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '@/assets/backend/vendor/libs/apex-charts/apex-charts.css'

// images
import image1 from "@/assets/backend/img/avatars/1.png"
import image2 from "@/assets/backend/img/illustrations/man-with-laptop-light.png"
import image3 from "@/assets/backend/img/icons/unicons/chart-success.png"
import image4 from "@/assets/backend/img/icons/unicons/wallet-info.png"
import image5 from "@/assets/backend/img/icons/unicons/wallet.png"
import image6 from "@/assets/backend/img/icons/unicons/paypal.png"
import image7 from "@/assets/backend/img/icons/unicons/chart.png"
import image8 from "@/assets/backend/img/icons/unicons/cc-success.png"
import image9 from "@/assets/backend/img/icons/unicons/cc-warning.png"

import Sidebar from '../Components/backend/SideBar'
import Footer from '../Components/backend/Footer'


export default function Dashboard({ auth }) {
    return (
        <>
        {/* <!-- Layout wrapper --> */}
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* <!-- Menu --> */}
    
            <Sidebar/>
            {/* <!-- / Menu --> */}
    
            {/* <!-- Layout container --> */}
            <div className="layout-page">
              {/* <!-- Navbar --> */}
    
              <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                  <a className="nav-item nav-link px-0 me-xl-4" href="">
                    <i className="bx bx-menu bx-sm"></i>
                  </a>
                </div>
    
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
    
                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* <!-- Place this tag where you want the button to render. --> */}
                    <li className="nav-item lh-1 me-3">
                      <a
                        className="github-button"
                        href=""
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                        >Aslan</a>
                    </li>
    
                    {/* <!-- User --> */}
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                      <a className="nav-link dropdown-toggle hide-arrow" href="" data-bs-toggle="dropdown">
                        <div className="avatar avatar-online">
                          <img src={image1} className="w-px-40 h-auto rounded-circle" />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex">
                              <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                  <img src={image1} className="w-px-40 h-auto rounded-circle" />
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <span className="fw-semibold d-block">John Doe</span>
                                <small className="text-muted">Admin</small>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-user me-2"></i>
                            <span className="align-middle">My Profile</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="bx bx-cog me-2"></i>
                            <span className="align-middle">Settings</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="d-flex align-items-center align-middle">
                              <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                              <span className="flex-grow-1 align-middle">Billing</span>
                              <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <div className="dropdown-divider"></div>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/logout">
                            <i className="bx bx-power-off me-2"></i>
                            <span className="align-middle">Log Out</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* <!--/ User --> */}
                  </ul>
                </div>
              </nav>
    
              {/* <!-- / Navbar --> */}
    
              {/* <!-- Content wrapper --> */}
              <div className="content-wrapper">
                {/* <!-- Content --> */}
    
                <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="row">
                    <div className="col-lg-8 mb-4 order-0">
                      <div className="card">
                        <div className="d-flex align-items-end row">
                          <div className="col-sm-7">
                            <div className="card-body">
                              <h5 className="card-title text-primary">Welcome Aslan! 🎉</h5>
                              <p className="mb-4">
                                You have done <span className="fw-bold">72%</span> more sales today. Check your new badge in
                                your profile.
                              </p>
    
                              <a href="javascript:" className="btn btn-sm btn-outline-primary">View Badges</a>
                            </div>
                          </div>
                          <div className="col-sm-5 text-center text-sm-left">
                            <div className="card-body pb-0 px-0 px-md-4">
                              <img
                                src={image2}
                                height="140"
                                alt="View Badge User"
                                data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                data-app-light-img="illustrations/man-with-laptop-light.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 order-1">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src={image3}
                                    alt="chart success"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt3"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt3">
                                    <a className="dropdown-item" href="">View More</a>
                                    <a className="dropdown-item" href="">Delete</a>
                                  </div>
                                </div>
                              </div>
                              <span className="fw-semibold d-block mb-1">Profit</span>
                              <h3 className="card-title mb-2">$12,628</h3>
                              <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +72.80%</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-6 mb-4">
                          <div className="card">
                            <div className="card-body">
                              <div className="card-title d-flex align-items-start justify-content-between">
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src={image4}
                                    alt="Credit Card"
                                    className="rounded"
                                  />
                                </div>
                                <div className="dropdown">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="cardOpt6"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-end" aria-labelledby="cardOpt6">
                                    <a className="dropdown-item" href="">View More</a>
                                    <a className="dropdown-item" href="">Delete</a>
                                  </div>
                                </div>
                              </div>
                              <span>Sales</span>
                              <h3 className="card-title text-nowrap mb-1">$4,679</h3>
                              <small className="text-success fw-semibold"><i className="bx bx-up-arrow-alt"></i> +28.42%</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* <!-- Order Statistics --> */}
                    <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                      <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between pb-0">
                          <div className="card-title mb-0">
                            <h5 className="m-0 me-2">Order Statistics</h5>
                            <small className="text-muted">42.82k Total Sales</small>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="orederStatistics"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                              <a className="dropdown-item" href="">Select All</a>
                              <a className="dropdown-item" href="">Refresh</a>
                              <a className="dropdown-item" href="">Share</a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex flex-column align-items-center gap-1">
                              <h2 className="mb-2">8,258</h2>
                              <span>Total Orders</span>
                            </div>
                            <div id="orderStatisticsChart"></div>
                          </div>
                          <ul className="p-0 m-0">
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <span className="avatar-initial rounded bg-label-primary"
                                  ><i className="bx bx-mobile-alt"></i
                                ></span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Electronic</h6>
                                  <small className="text-muted">Mobile, Earbuds, TV</small>
                                </div>
                                <div className="user-progress">
                                  <small className="fw-semibold">82.5k</small>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet"></i></span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Fashion</h6>
                                  <small className="text-muted">T-shirt, Jeans, Shoes</small>
                                </div>
                                <div className="user-progress">
                                  <small className="fw-semibold">23.8k</small>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt"></i></span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Decor</h6>
                                  <small className="text-muted">Fine Art, Dining</small>
                                </div>
                                <div className="user-progress">
                                  <small className="fw-semibold">849k</small>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex">
                              <div className="avatar flex-shrink-0 me-3">
                                <span className="avatar-initial rounded bg-label-secondary"
                                  ><i className="bx bx-football"></i
                                ></span>
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <h6 className="mb-0">Sports</h6>
                                  <small className="text-muted">Football, Cricket Kit</small>
                                </div>
                                <div className="user-progress">
                                  <small className="fw-semibold">99</small>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Order Statistics --> */}
    
                    {/* <!-- Expense Overview --> */}
                    <div className="col-md-6 col-lg-4 order-1 mb-4">
                      <div className="card h-100">
                        <div className="card-header">
                          <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item">
                              <button
                                type="button"
                                className="nav-link active"
                                role="tab"
                                data-bs-toggle="tab"
                                data-bs-target="#navs-tabs-line-card-income"
                                aria-controls="navs-tabs-line-card-income"
                                aria-selected="true"
                              >
                                Income
                              </button>
                            </li>
                            <li className="nav-item">
                              <button type="button" className="nav-link" role="tab">Expenses</button>
                            </li>
                            <li className="nav-item">
                              <button type="button" className="nav-link" role="tab">Profit</button>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body px-0">
                          <div className="tab-content p-0">
                            <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                              <div className="d-flex p-4 pt-3">
                                <div className="avatar flex-shrink-0 me-3">
                                  <img src={image5}  />
                                </div>
                                <div>
                                  <small className="text-muted d-block">Total Balance</small>
                                  <div className="d-flex align-items-center">
                                    <h6 className="mb-0 me-1">$459.10</h6>
                                    <small className="text-success fw-semibold">
                                      <i className="bx bx-chevron-up"></i>
                                      42.9%
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <div id="incomeChart"></div>
                              <div className="d-flex justify-content-center pt-4 gap-2">
                                <div className="flex-shrink-0">
                                  <div id="expensesOfWeek"></div>
                                </div>
                                <div>
                                  <p className="mb-n1 mt-1">Expenses This Week</p>
                                  <small className="text-muted">$39 less than last week</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Expense Overview --> */}
    
                    {/* <!-- Transactions --> */}
                    <div className="col-md-6 col-lg-4 order-2 mb-4">
                      <div className="card h-100">
                        <div className="card-header d-flex align-items-center justify-content-between">
                          <h5 className="card-title m-0 me-2">Transactions</h5>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="transactionID"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                              <a className="dropdown-item" href="">Last 28 Days</a>
                              <a className="dropdown-item" href="">Last Month</a>
                              <a className="dropdown-item" href="">Last Year</a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="p-0 m-0">
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src={image6}  className="rounded" />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="text-muted d-block mb-1">Paypal</small>
                                  <h6 className="mb-0">Send money</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-1">
                                  <h6 className="mb-0">+82.6</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src={image5}  className="rounded" />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="text-muted d-block mb-1">Wallet</small>
                                  <h6 className="mb-0">Mac'D</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-1">
                                  <h6 className="mb-0">+270.69</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src={image7}  className="rounded" />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="text-muted d-block mb-1">Transfer</small>
                                  <h6 className="mb-0">Refund</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-1">
                                  <h6 className="mb-0">+637.91</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="{image8}"  className="rounded" />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="text-muted d-block mb-1">Credit Card</small>
                                  <h6 className="mb-0">Ordered Food</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-1">
                                  <h6 className="mb-0">-838.71</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex mb-4 pb-1">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src={image8}  className="rounded" />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="text-muted d-block mb-1">Wallet</small>
                                  <h6 className="mb-0">Starbucks</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-1">
                                  <h6 className="mb-0">+203.33</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                            <li className="d-flex">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src={image9}  className="rounded" />
                              </div>
                              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div className="me-2">
                                  <small className="text-muted d-block mb-1">Mastercard</small>
                                  <h6 className="mb-0">Ordered Food</h6>
                                </div>
                                <div className="user-progress d-flex align-items-center gap-1">
                                  <h6 className="mb-0">-92.45</h6>
                                  <span className="text-muted">USD</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Transactions --> */}
                  </div>
                </div>
                {/* <!-- / Content --> */}
    
                {/* <!-- Footer --> */}
                <Footer/>
                {/* <!-- / Footer --> */}
    
                <div className="content-backdrop fade"></div>
              </div>
              {/* <!-- Content wrapper --> */}
            </div>
            {/* <!-- / Layout page --> */}
          </div>
    
          {/* <!-- Overlay --> */}
          <div className="layout-overlay layout-menu-toggle"></div>
        </div>
        {/* <!-- / Layout wrapper --> */}
          
        </>
      )
}
