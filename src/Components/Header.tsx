import React, {Component} from "react"
import {Nav, Navbar} from "react-bootstrap"
import {navbarList, INavbarModel} from "../Models/NavbarModel"
import {baseData} from "../config"

export class Header extends Component {
    render() {
        return (
            <div className="bottom-header">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">{baseData.companyNamePersian}</Navbar.Brand>
                    <Nav className="justify-content-center" style={{margin: "auto"}}>
                        {navbarList.map((item: INavbarModel, index: number) => {
                            return (<Nav.Link key={index} href={item.route}
                                              style={{padding: "20px"}}>{item.name}</Nav.Link>)
                        })}
                    </Nav>
                </Navbar>
            </div>
        )
    }
}