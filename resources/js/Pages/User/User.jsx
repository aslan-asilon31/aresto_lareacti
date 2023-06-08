import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
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


export default function User() {

    
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const url = 'http://localhost:8000/api/users'

    // useEffect(()=>{
    //     fetchUsers() 
    // },[])

    useEffect(() => {
      const fetchUsers = async function () {
        try {
          setLoading(true);
          const response = await axios.get(url);
          if (response.status === 200) {
            setUsers(response.data);
          }
        } catch (error) {
          throw error;
        } finally {
          setLoading(false);
        }
      };
      fetchUsers();
    }, [url]);

    if(loading)
    {
      return <div className="" style={{backgroundColor: 'indigo', width: '100%', height: '100vh', }}><h3 className="" style={{   justifyContent: 'center' }}>      
      <Button className="" variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button></h3></div>
    }

    const fetchUsers = async () => {
        await axios.get(`http://localhost:8000/api/users`).then(({data})=>{
            setUsers(data)
        })
    }

    async function search(key) {
        console.warn(key);
        let result = await fetch("http://localhost:8000/api/searchuser/" + key);
        result = await result.json();
        setUsers(result);
    }

    const deleteUser = async (id) => {
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

          await axios.delete(`http://localhost:8000/api/users/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchUsers()
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
    
            <SideBar />
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
                    <h5 className="card-header">User List</h5>
                    <div className=" text-nowrap">
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
                          <Button className='btn btn-primary mb-3 text-white float-end  ml-3 me-2' to={"/product/create"}>
                          Create User
                          </Button>
                        </div>
                        <div className="table-responsive mt-3">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Created</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                users.length > 0 && (
                                    users.map((row, key)=>(
                                        <tr key={key}>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.created_at}</td>
                                            <td>
                                                <Button to={`/user/edit/${row.id}`} className='btn btn-success me-2'>
                                                    Edit
                                                </Button>
                                                <Button variant="danger" onClick={()=>deleteUser(row.id)}>
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