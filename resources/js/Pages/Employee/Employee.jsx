import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'

import Form from 'react-bootstrap/Form';

import '../../assets/backend/vendor/fonts/boxicons.css'
import '../../assets/backend/vendor/css/core.css'
import '../../assets/backend/vendor/css/theme-default.css'
import '../../assets/backend/css/demo.css'
import '../../assets/backend/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '../../assets/backend/vendor/libs/apex-charts/apex-charts.css'

// components
import SideBar from '../../components/backend/SideBar'
import TopBar from '../../components/backend/TopBar'
import Footer from '../../components/backend/Footer'


export default function Employee() {

    
    const [employees, setEmployees] = useState([])
    
    const navigate = useNavigate();


    useEffect(()=>{
        fetchEmployees() 
    },[])

    const fetchEmployees = async () => {
        await axios.get(`http://localhost:8000/api/employees`).then(({data})=>{
            setEmployees(data)
        })
    }

    async function search(key) {
        console.warn(key);
        let result = await fetch("http://localhost:8000/api/searchemployee/" + key);
        result = await result.json();
        setEmployees(result);
      }

    const deleteEmployee = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/employees/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchEmployees()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }


    return (

        <>

        
          {/* <!-- Layout wrapper --> */}
          <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            {/* <!-- Menu --> */}
    
            <SideBar/>
            {/* <!-- / Menu --> */}
    
            {/* <!-- Layout container --> */}
            <div className="layout-page">
              {/* <!-- Navbar --> */}
    
                <TopBar />
    
              {/* <!-- / Navbar --> */}
    
              {/* <!-- Content wrapper --> */}
              <div className="content-wrapper">
                {/* <!-- Content --> */}
    
                <div className="container-xxl flex-grow-1 container-p-y">
                  {/* <!-- Contextual Classes --> */}
    
                  <div className="card">
                    <h5 className="card-header">Employee List </h5>
                    <div className="table-responsive text-nowrap">
                      <div className="m-3">
                        <div className="col-12 text-white d-flex">
                          <Form className="d-flex">
                            <Form.Control
                              onChange={(e) => search(e.target.value)}
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                            />
                          </Form>
                          <a className='btn btn-primary mb-3 text-white float-end  ml-3 me-2' to={"employees/create"}>
                          Create Employee
                          </a>
                        </div>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Role</th>
                              <th>Created At</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                employees.length > 0 && (
                                    employees.map((row, key)=>(
                                        <tr key={key}>
                                            <td>
                                                <img width="50px" src={`http://localhost:8000/storage/employees/image/${row.image}`} />
                                            </td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.phone}</td>
                                            <td>{row.role}</td>
                                            <td>{row.created_at}</td>
                                            <td>
                                                <Button to={`/employee/edit/${row.id}`} className='btn btn-success me-2'>
                                                    Edit
                                                </Button>
                                                <Button variant="danger" onClick={()=>deleteEmployee(row.id)}>
                                                    Delete 
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
    
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ Contextual Classes --> */}
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