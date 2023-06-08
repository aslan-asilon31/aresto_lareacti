import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

// BOOTSTRAP
import { ProgressBar } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form';
import { FaFileCsv} from "react-icons/fa";
import { FaFileExcel} from "react-icons/fa";
import { FaRegFilePdf} from "react-icons/fa";
import { FaUpload} from "react-icons/fa";
import { FaPlusSquare} from "react-icons/fa";
import { FaTrashAlt} from "react-icons/fa";
import { FaEdit} from "react-icons/fa";
import { FaEye} from "react-icons/fa";


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


function Order() {

      
  const [loading, setLoading] = useState(true)
  const [inventories, setInventories] = useState([])
  const url = 'http://localhost:8000/api/inventories'

  useEffect(() => {
    const fetchInventories = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setInventories(response.data);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchInventories();
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

  const fetchInventories = async () => {
      await axios.get(`http://localhost:8000/api/inventories`).then(({data})=>{
          setInventories(data)
      })
  }


  const deleteInventories = async (id) => {
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

        await axios.delete(`http://localhost:8000/api/inventories/${id}`).then(({data})=>{
          Swal.fire({
              icon:"success",
              text:data.message
          })
          fetchInventories()
        }).catch(({response:{data}})=>{
          Swal.fire({
              text:data.message,
              icon:"error"
          })
        })
  }


  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        month: "long",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        // year: "numeric",
    };
    return date.toLocaleString(undefined, options);
  };

  const getFormattedYear = (dateString) => {
    const date = new Date(dateString);
    const options = {
        // month: "long",
        // weekday: "long",
        // hour: "numeric",
        // hour12: true,
        year: "numeric",
    };
    return date.toLocaleString(undefined, options);
  };


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
                    <h5 className="card-header">Order List</h5>
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
                          <Button className='btn mb-3 text-white float-end  ml-3 me-2' to={"/orders/create"} style={{ backgroundColor: 'indigo' }}>
                            <FaPlusSquare size={16} color="white"  />
                          </Button>
                          <Button className='btn mb-3 text-white float-end  ml-3 me-2' style={{ backgroundColor: 'indigo' }}>
                            <FaRegFilePdf size={16} color="white"  />
                          </Button>
                          <Button className='btn mb-3 text-white float-end  ml-3 me-2' style={{ backgroundColor: 'indigo' }}>
                            <FaFileExcel size={16} color="white"  />
                          </Button>
                          <Button className='btn mb-3 text-white float-end  ml-3 me-2' style={{ backgroundColor: 'indigo' }}>
                            <FaFileCsv size={16} color="white"  />
                          </Button>
                          <Button className='btn mb-3 text-white float-end  ml-3 me-2' style={{ backgroundColor: 'indigo' }}>
                            <FaUpload size={16} color="white"  />
                          </Button>
                          <div style={{ width: "300px", }}>
                            <ProgressBar now='10' label='5%' style={{  height: "25px", backgroundColor: "indigo", fontSize: "16px" }} />
                          </div>
                          
                        </div>
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Item Name</th>
                              <th>Quantity</th>
                              <th>Unit Price</th>
                              <th>Reorder level</th>
                              <th>Created At</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                inventories.length > 0 && (
                                    inventories.map((row, key)=>(
                                        <tr key={key}>
                                            <td>{row.item_name}</td>
                                            <td>{row.quantity}</td>
                                            <td>{row.unit_price}</td>
                                            <td>{row.reorder_level}</td>
                                            <td>{getFormattedDate(row.created_at)} , {getFormattedYear(row.created_at)}</td>
                                            <td>
                                            <Button to={`/inventories/show`} className='btn btn-success me-2' style={{ backgroundColor:'indigo' }}>
                                                  <FaEye size={16} color="white"  />
                                            </Button>
                                            <Button to={`/inventories/edit/${row.id}`} className='btn btn-success me-2' style={{ backgroundColor:'indigo' }}>
                                                  <FaEdit size={16} color="white"  />
                                            </Button>
                                            <Button style={{ backgroundColor:'indigo' }} onClick={()=>deleteInventories(row.id)}>
                                                  <FaTrashAlt size={16} color="white"  />
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
    
  );
}

export default Order;