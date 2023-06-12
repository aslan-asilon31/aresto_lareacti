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

export default function BookingAdd() {
  const navigate = useNavigate();

  const [reservation_form, setReservationForm] = useState("")
  const [booking_time, setBookingTime] = useState("")
  const [guest_number, setGuestNumber] = useState("")
  const [special_request, setSpecialRequest] = useState("")
  const [confirmation_message, setConfirmationMessage] = useState("")
  const [cancellation_policy, setCancellationPolicy] = useState()
  const [contact_information, setContactInformation] = useState()
  const [payment_information, setPaymentInformation] = useState()
  const [validationError,setValidationError] = useState({})


  const createBooking = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('reservation_form', reservation_form)
    formData.append('booking_time', booking_time)
    formData.append('guest_number', guest_number)
    formData.append('special_request', special_request)
    formData.append('confirmation_message', confirmation_message)
    formData.append('cancellation_policy', cancellation_policy)
    formData.append('contact_information', contact_information)
    formData.append('payment_information', payment_information)

    await axios.post(`http://localhost:8000/api/bookings`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/bookings")
      window.location.reload();
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
                  <h4 className="card-title">Create Bookings</h4>
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
                    <Form onSubmit={createBooking}>
                      <Row> 
                          <Col>
                            <Form.Group controlId="RservationForm">
                                <Form.Label>Reservation Form</Form.Label>
                                <Form.Control type="text" value={reservation_form} onChange={(event)=>{
                                  setReservationForm(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="BookingTime">
                                <Form.Label>Booking Time</Form.Label>
                                <Form.Control type="date" value={booking_time} onChange={(event)=>{
                                  setBookingTime(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="GuestNumber">
                                <Form.Label>Guest Number</Form.Label>
                                <Form.Control type="number" value={guest_number} onChange={(event)=>{
                                  setGuestNumber(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="SpecialRequest">
                                <Form.Label>Special Request</Form.Label>
                                <Form.Control type="text" value={special_request} onChange={(event)=>{
                                  setSpecialRequest(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="ConfirmationMessage">
                                <Form.Label>Confirmation Message </Form.Label>
                                <Form.Control type="text" value={confirmation_message} onChange={(event)=>{
                                  setConfirmationMessage(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="CancellationPolicy">
                                <Form.Label>Cancellation Policy</Form.Label>
                                <Form.Control type="text" value={cancellation_policy} onChange={(event)=>{
                                  setCancellationPolicy(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="ContactInformation">
                                <Form.Label>Contact Information</Form.Label>
                                <Form.Control type="text" value={contact_information} onChange={(event)=>{
                                  setContactInformation(event.target.value)
                                }}/>
                            </Form.Group>
                          </Col>  
                      </Row>
                      <Row> 
                          <Col>
                            <Form.Group controlId="PaymentInformation">
                                <Form.Label>Payment Information</Form.Label>
                                <Form.Control type="text" value={payment_information} onChange={(event)=>{
                                  setPaymentInformation(event.target.value)
                                }}/>
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