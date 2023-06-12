import React, { useState } from "react";
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

export default function EmployeeAdd() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState()
  const [validationError,setValidationError] = useState({})

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

  const createEmployee = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('password', password)
    formData.append('role', role)
    formData.append('image', image)

    await axios.post(`http://localhost:8000/api/employees`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/employee")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
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
                <div className="card-body">
                  <h4 className="card-title">Create Employee</h4>
                  <hr />
                  <div className="form-wrapper">
                    {
                      Object.keys(validationError).length > 0 && (
                        <div className="row">
                          <div className="col-12">
                            <div className="alert alert-danger">
                              <ul className="mb-0">
                                {
                                  Object.entries(validationError).map(([key, value])=>(
                                    <li key={key}>{value}</li>   
                                  ))
                                }
                              </ul>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    <Form onSubmit={createEmployee}>
                      <Row> 
                          <Col>
                            <Form.Group controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(event)=>{
                                  setName(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(event)=>{
                                  setEmail(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="Phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" value={phone} onChange={(event)=>{
                                  setPhone(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="Password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={password} onChange={(event)=>{
                                  setPassword(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="Role">
                                <Form.Label>Role</Form.Label>
                                <Form.Control type="text" value={role} onChange={(event)=>{
                                  setRole(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group controlId="Image" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={changeHandler} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                        Save
                      </Button>
                    </Form>
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