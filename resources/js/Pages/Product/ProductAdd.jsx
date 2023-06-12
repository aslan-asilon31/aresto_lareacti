import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate , Link} from 'react-router-dom'

export default function ProductAdd() {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [validationError,setValidationError] = useState({})


  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('amount', amount)
    formData.append('price', price)

    await axios.post(`http://localhost:8000/api/products`, formData).then(({data})=>{
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate('/products');
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
    <div className="row justify-content-left">
      <div className="col-12 col-sm-12 col-md-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Create Product</h4>
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
              <Form onSubmit={createProduct}>
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
                      <Form.Group controlId="Amount">
                          <Form.Label>Amount</Form.Label>
                          <Form.Control type="text" value={amount} onChange={(event)=>{
                            setAmount(event.target.value)
                          }}/>
                      </Form.Group>
                    </Col>  
                </Row>
                <Row> 
                    <Col>
                      <Form.Group controlId="Price">
                          <Form.Label>Price</Form.Label>
                          <Form.Control type="text" value={price} onChange={(event)=>{
                            setPrice(event.target.value)
                          }}/>
                      </Form.Group>
                    </Col>  
                </Row>
                
                <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                  Save
                </Button>
                <Link to={`/products`} className='btn btn-success me-2' style={{ backgroundColor:'indigo' }}>
                      Back
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}