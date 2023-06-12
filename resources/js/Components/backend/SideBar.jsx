import React from 'react'
import { Link, Head } from '@inertiajs/react';
import { useNavigate, useLocation } from 'react-router-dom';


// BOOTSTRAP
import { FaHandHoldingUsd} from "react-icons/fa";

import { useState } from 'react';

// import $ from 'jquery';

function SideBar({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const navigate = useNavigate();
  // console.log(navigate)

  // const locpage = useLocation();
  const isActive = navigate == '/employee' ? 'active' : '';


    return (
    <>

<style>
        {
            `.coloractive {
              background-color: red;
              color: purple;
              font-weight:bolder;
            },
             .hilangkan{
              visibility:hidden;
             }
            `
        }
    </style>

         <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <a href="index.html" className="app-brand-link">

              <span className="app-brand-text demo menu-text fw-bolder ms-2">Aurofil</span>
            </a>

            <a href="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
              <i className="bx bx-chevron-left bx-sm align-middle"></i>
            </a>
          </div>

          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
            {/* <!-- Dashboard --> */}
            <li className="menu-item {isActive}">
              <a href="/dashboard" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>


            <li className="menu-item {isActive}">
              <a href="/user" className="menu-link">
                <i className="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Analytics">User</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/products" className="menu-link">
                <i className="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Analytics">Product</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/employees" className="menu-link">
                <i className="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Analytics">Employee</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/bookings" className="menu-link">
                <i className="menu-icon tf-icons bx bx-money"></i>
                <div data-i18n="Analytics">Booking</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/shifts" className="menu-link">
                <i className="menu-icon tf-icons bx bx-user"></i>
                <div data-i18n="Analytics">Shift</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/menus" className="menu-link">
                <i className="menu-icon tf-icons bx bx-restaurant"></i>
                <div data-i18n="Analytics">Menus</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/menudetails" className="menu-link">
                <i className="menu-icon tf-icons bx bx-restaurant"></i>
                <div data-i18n="Analytics">Menu Details</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/menucategories" className="menu-link">
                <i className="menu-icon tf-icons bx bx-restaurant"></i>
                <div data-i18n="Analytics">Menu Categories</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/orders" className="menu-link">
                <i className="menu-icon tf-icons bx bx-money"></i>
                <div data-i18n="Analytics">Order</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/orderitems" className="menu-link">
                <i className="menu-icon tf-icons bx bx-book"></i>
                <div data-i18n="Analytics">Order Items</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/inventories" className="menu-link">
                <i className="menu-icon tf-icons bx bx-cart"></i>
                <div data-i18n="Analytics">Inventory</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/sales" className="menu-link">
                <i className="menu-icon tf-icons bx bx-coin"></i>
                <div data-i18n="Analytics">Sales</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/reports" className="menu-link">
                <i className="menu-icon tf-icons bx bx-folder"></i>
                <div data-i18n="Analytics">Report</div>
              </a>
            </li>

            <li className="menu-item {isActive}">
              <a href="/about" className="menu-link">
                <i className="menu-icon tf-icons bx bx-exit"></i>
                <Link href={route('logout')} method="post" as="button">
                          Log Out
                </Link>
              </a>
            </li>

          </ul>
        </aside>
  </>
        );
}

export default SideBar;
