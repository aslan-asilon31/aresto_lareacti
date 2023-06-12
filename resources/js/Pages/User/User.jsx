import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

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

// BOOTSTRAP
import { ProgressBar } from 'react-bootstrap'
import { FaFileCsv} from "react-icons/fa";
import { FaFileExcel} from "react-icons/fa";
import { FaRegFilePdf} from "react-icons/fa";
import { FaUpload} from "react-icons/fa";
import { FaPlusSquare} from "react-icons/fa";
import { FaTrashAlt} from "react-icons/fa";
import { FaEdit} from "react-icons/fa";
import { FaEye} from "react-icons/fa";

//ChartJS
import Chart from "chart.js/auto";
import { Line, Pie } from "react-chartjs-2";


export default function User() {

    
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const url = 'http://localhost:8000/api/users'

    // chartJS Effect  
    const [chartVisible, setChartVisible] = useState(true);

    const toggleChartVisibility = () => {
      setChartVisible(!chartVisible);
    };
    // End chartJS Effect  

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
        year: "numeric",
    };
    return date.toLocaleString(undefined, options);
  };

  // chartJS
  // Process the users data and update the labels and dataset accordingly
  const roles = users.map(user => user.role);
  const roleCounts = {};
  
  // Count the occurrences of each role
  roles.forEach(role => {
    roleCounts[role] = (roleCounts[role] || 0) + 1;
  });
  
  const labels = Object.keys(roleCounts);
  const roleData = Object.values(roleCounts);
  
  const UserPie = {
    labels: labels,
    datasets: [
      {
        label: "Amount :",
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(153, 102, 255)","rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(255, 159, 64)"],
        borderColor: "rgb(255, 255, 255)",
        data: roleData,
      },
    ],
  };
  // End chartJS
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
                    <h5 className="card-header">User Page</h5>

                    <div className=" text-nowrap">
                      <div className="m-3">
                        <div className="col-12 text-white d-flex">
                          <Form className="d-flex">
                            {/* <Form.Control
                              onChange={(e) => search(e.target.value)}
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                            /> */}
                          </Form>
                          <Button className='btn mb-3 text-white float-end  ml-3 me-2' href={"/user/create"} style={{ backgroundColor: 'indigo' }}>
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
                          <Button className='btn mb-3 text-white float-end  ml-3 me-2' onClick={toggleChartVisibility} style={{ backgroundColor: 'indigo' }}>
                            {chartVisible ? 'Hide Chart' : 'Show Chart'}
                          </Button>

                          {/* <div style={{ width: "300px", }}>
                            <ProgressBar now='10' label='5%' style={{  height: "25px", backgroundColor: "indigo", fontSize: "16px" }} />
                          </div> */}
                        </div>

                        {chartVisible && (
                        <div className="" style={{ width:"500px" }}>
                        <Pie data={UserPie} />
                        </div>
                        )}

                        <div className="table-responsive mt-3">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Status</th>
                              <th>Role</th>
                              <th>Created</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                                users.length > 0 && (
                                    users.map((row, key)=>(
                                        <tr key={key}>
                                            <td>
                                                <img width="50px" src={`http://localhost:8000/storage/users/image/${row.image}`} />
                                            </td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.status}</td>
                                            <td>{row.role}</td>
                                            <td>{getFormattedDate(row.created_at)} , {getFormattedYear(row.created_at)}</td>
                                            <td>
                                            <Button to={`/user/show`} className='btn btn-success me-2' style={{ backgroundColor:'indigo' }}>
                                                  <FaEye size={16} color="white"  />
                                            </Button>
                                            <Button to={`/user/edit/${row.id}`} style={{ backgroundColor:'indigo' }} className='btn btn-success me-2'>
                                                  <FaEye size={16} color="white"  />
                                            </Button>
                                            <Button style={{ backgroundColor:'indigo' }} onClick={()=>deleteUser(row.id)}>
                                                  <FaEdit size={16} color="white"  />
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