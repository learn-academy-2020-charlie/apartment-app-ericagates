import React from "react"
import PropTypes from "prop-types"
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          collapsed: true
        }
    }
    
    toggleNavbar = () => {
        let {collapsed} = this.state
        if (collapsed === true){
            this.setState({collapsed: false})
        }else{
            this.setState({collapsed: true})
        }
    }

    render (){
        let{collapsed} = this.state
        const {
            logged_in,
            sign_in_route,
            sign_out_route
        } = this.props
    
        return (
        <React.Fragment>
 
            <Navbar color="faded" light >
                <NavbarBrand href="/" className="mr-auto">Apartment App</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar className="text-right">
                <NavItem>
                    <NavLink to= {`/`}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to= {`/index`}>Show All Apartments</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to= {`/create`}>Add An Apartments</NavLink>
                </NavItem>
                 <NavItem>
                    { logged_in && <a href={sign_out_route}>Sign Out</a>}
                </NavItem>
                <NavItem>
                    { !logged_in && <a href={sign_in_route}>Sign In</a>}
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>

        </React.Fragment>
        )
    }
}


export default Header
