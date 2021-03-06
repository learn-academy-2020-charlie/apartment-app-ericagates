import React, { Component } from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import { Container, Col, Row } from 'reactstrap'

import { Redirect } from 'react-router-dom'

class ApartmentNew extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        form: {
            street: "",
            city: "",
            state: "",
            manager:"",
            email:"",
            price:"",
            bedrooms:"",
            bathrooms:"",
            pets:"",
            user_id: this.props.current_user.id
        },
        success: false
    }
}

  //create a handleChange method
    handleChange = (e) => {
      let {form} = this.state
      form[e.target.name] = e.target.value
      console.log(form)
      this.setState({form: form})
  }

  //create a handleSubmit method
  handleSubmit = () => {
      this.props.createNewApartment(this.state.form)
      this.setState({success: true})
  }

    render() {
      const {
        logged_in,
        sign_in_route,
        sign_out_route,
        current_user
      } = this.props
      return (
        <React.Fragment>
          <Header
            logged_in = { logged_in } 
            sign_in_route = { sign_in_route }
            sign_out_route = { sign_out_route }
          />
          <Container >
          <h2>Add A New Apartment</h2>
          <Form>
                <FormGroup>
                    <Label>Street</Label>
                    <Input 
                    type = "text"
                    name = "street"
                    value = { this.state.form.street }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>City</Label>
                    <Input 
                    type = "text"
                    name = "city"
                    value = { this.state.form.city } 
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>State</Label>
                    <Input 
                    type = "text"
                    name = "state"
                    value = { this.state.form.state } 
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Manager</Label>
                    <Input 
                    type = "text"
                    name = "manager"
                    value = { this.state.form.manager }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input 
                    type = "email"
                    name = "email"
                    value = { this.state.form.email } 
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Price</Label>
                    <Input 
                    type = "text"
                    name = "price"
                    value = { this.state.form.price }
                    onChange = { this.handleChange }
                    />
                </FormGroup>
                <Row>
                  <Col>
                    <FormGroup>
                        <Label>Bedrooms</Label>
                        <Input 
                        type = "number"
                        name = "bedrooms"
                        min={0}
                        value = { this.state.form.bedrooms }
                        onChange = { this.handleChange }
                        />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                        <Label>Bathrooms</Label>
                        <Input 
                        type = "number"
                        name = "bathrooms"
                        min={0}
                        value = { this.state.form.bathrooms }
                        onChange = { this.handleChange } 
                        />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup tag="fieldset">
                  <Label>Pets</Label>                
                  <FormGroup check>
                    <Label check>
                      <Input 
                      type="radio" 
                      name="pets"
                      value = "Yes"
                      checked={this.state.form.pets === 'Yes'}
                      onChange = { this.handleChange }/>
                      Yes
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                      type="radio"
                      name="pets"
                      value = "No"
                      checked={this.state.form.pets === 'No'}
                      onChange = { this.handleChange }/>
                      No
                    </Label>
                  </FormGroup>
                </FormGroup>
                <Button 
                name="submit"
                color = "secondary"
                onClick = {this.handleSubmit}
                >
                  Submit
                </Button>
            </Form>
          </Container>
          <Footer />
          { this.state.success && <Redirect to = "/myapartments" /> }
        </React.Fragment>
      )
    }
  }
  
  export default ApartmentNew