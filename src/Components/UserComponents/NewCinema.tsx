import React, { Component } from "react"
import { Form, Col, Button, ButtonToolbar, DropdownButton, Dropdown } from "react-bootstrap"
import { ETranslator } from "../../Constants/Translator"
import { IPlaceModel } from "../../Models/PlaceModel"
import { connect } from "react-redux";
//import { mapDispatchToProps } from "../../Redux/MapDispatchToProps/MapDispatchToProps"
//import { mapStateToProps } from "../../Redux/MapStateToProps/MapStateToProps"
import { withRouter, RouteComponentProps } from "react-router-dom";
import { routes } from "../../Constants/Routs"
import { IApheatreModel,IAnAmphitheatreModel } from "../../Models/AmpheatreModel"
import { Store } from "../../Redux/Store/Store"
import {addCinema} from "../../Redux/Actions/addCinema"
import {editCinema} from "../../Redux/Actions/onEditCinema"
import {deleteCinema} from "../../Redux/Actions/DeleteCinema"
import {onAmphitheatreForm} from "../../Redux/Actions/AmphitheatreForm"
import {IStoreRedux} from "../../Redux/Store/StoreModel"
import {IstateEditCinema} from "../../Models/CinemaModel"
import {Dispatch} from "redux"


interface IProps extends RouteComponentProps<any> {

    cinema: IstateEditCinema
    addCinema(data: IPlaceModel): void
    editCinema (data:IPlaceModel,index:number):void
    deleteCinema (data:IPlaceModel,index:number) :void
    onAmphitheatreForm (data:IAnAmphitheatreModel) : void
}

interface IState {
    name: string,
    description: string,
    address: string,
    verifyAmphiteatre: boolean
}

class NewCinema1 extends Component<IProps, IState> {
    store2 = Store.getState()
    constructor(props: IProps) {
        super(props)


        this.state = {
            name: this.props.cinema.name,
            description: this.props.cinema.description,
            address: this.props.cinema.address,
            verifyAmphiteatre: false

        }
    }

    handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let item: string = e.target.name
        let newValue: string = e.target.value
        switch (item) {
            case "name":
                return this.setState({ name: newValue })
            case "description":
                return this.setState({ description: newValue })
            case "address":
                return this.setState({ address: newValue })
            default:
                return
        }
    }
    submitForm = () => {
        const { name, description, address } = this.state
        this.props.addCinema({ name: name, description: description, address: address })
        this.setState({verifyAmphiteatre:true})
      //  this.props.history.replace(routes.CINEMAS)


    }

    newButton = () => {
        return (
            <ButtonToolbar>
                <Button
                    disabled={this.controlEmpty()}
                    onClick={this.submitForm}
                    variant="primary"
                >
                    {ETranslator.SAVE}
                </Button>
                <Button onClick={this.handleCancel} variant="secondary">{ETranslator.CANCEL}</Button>
            </ButtonToolbar>
        )
    }

    handleCancel = () => {
        this.props.history.replace(routes.CINEMAS)
    }

    handleEdit = () => {
        const { name, description, address } = this.state
        this.props.editCinema({ name: name, description: description, address: address },
            this.props.cinema.index)
        this.props.history.replace(routes.CINEMAS)
    }

    handleDeletCinema = () => {
        const { name, description, address } = this.state
        this.props.deleteCinema({ name: name, description: description, address: address },
            this.props.cinema.index)
        this.props.history.replace(routes.CINEMAS)
    }

    controlEmpty = () => {
        const { name, address, description } = this.state
        if (name === "" || address === "" || description === "") {
            return true
        }
        return false
    }

    amphitheatreForm = () => {


        let newAmphitheatre: IAnAmphitheatreModel = {
            cinema: this.props.cinema.name,
            name: "",
            chair: 0,
            floor: 0,
            index: -1,
            svgTranslate:  {id:"",
			name: "",
			plan :[]
		}

        }
        this.props.onAmphitheatreForm(newAmphitheatre)

        this.props.history.replace(routes.NEW_AMPHITHEATRE)
    }

    editAmphitheatre = () => {


        let newAmphitheatre: IAnAmphitheatreModel = {
            cinema: this.props.cinema.name,
            name: "",
            chair: 0,
            floor: 0,
            index: -1,
            svgTranslate:  {id:"",
			name: "",
			plan :[]
		}}
        this.props.onAmphitheatreForm(newAmphitheatre)

        this.props.history.replace(routes.NEW_AMPHITHEATRE)
    }

    editButton = () => {
        return (
            <div>
                <Button className="margin-button left-float" variant="primary"
                    onClick={this.amphitheatreForm}>{ETranslator.ADD_AMPHITHEATRE}</Button>
                <ButtonToolbar>
                    <Button disabled={this.controlEmpty()} className="margin-button" variant="primary"
                        onClick={this.handleEdit}>{ETranslator.SAVE}</Button>
                    <Button className="margin-button" variant="danger"
                        onClick={this.handleDeletCinema}>{ETranslator.DELETE}</Button>
                    <Button className="margin-button" variant="secondary"
                        onClick={this.handleCancel}>{ETranslator.CANCEL}</Button>
                </ButtonToolbar>

            </div>
        )
    }

    addAmphitheatre = () => {

        //     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        //         {this.props.cinemas.reducerAmphitheatre.map((item: IApheatreModel, index: number) => {
        //             return <Dropdown.Item key={index}>{item.name}</Dropdown.Item>
        //         })}
        //     </DropdownButton>
      //   )

    }

    render() {

        return (
            <div>
                <Form className="align-right">
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>{ETranslator.NAME}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={ETranslator.ENTER_NAME}
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInput}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>{ETranslator.ADDRESS}</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleInput}
                                placeholder="..." />
                        </Form.Group>


                    </Form.Row>


                    <Form.Group>
                        <Form.Label>{ETranslator.DESCRIPTION}</Form.Label>
                        <Form.Control
                            type="text"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInput}
                            placeholder={ETranslator.DESCRIPTION}
                        />
                    </Form.Group>

                    <Form.Row>
                        {/* {this.props.cinemas.reducerAmphitheatre.length > 0 ? this.addAmphitheatre() : null} */}
                    </Form.Row>
                    {/* {this.state.verifyAmphiteatre?this.addAmphitheatre():null} */}
                    {/* {this.props.cinema.reducerAmphitheatre.length>0!=="newcinema"?this.addAmphitheatre():null} */}
                    <Form.Row>
                        {this.props.match.params.id !== "newcinema" ||this.state.verifyAmphiteatre ? this.editButton() : this.newButton()}
                    </Form.Row>
                </Form>

            </div>
        )
    }
}

const mapDispatchToProps= (dispatch:Dispatch)=>{
    return{

        addCinema:(data:IPlaceModel)=>{
            
            dispatch(addCinema(data))
        
        
        },

        editCinema :(data:IPlaceModel,index:number)=>{
            dispatch(editCinema(data,index))
        },
        deleteCinema : (data:IPlaceModel,index:number)=>{
            dispatch(deleteCinema(data,index))
        },
        onAmphitheatreForm : (data:IAnAmphitheatreModel) => {
            dispatch (onAmphitheatreForm(data))
        },
       
}}
 const mapStateToProps = (state:IStoreRedux) =>{
    return{cinema:state.cinema}
}



export const NewCinema = connect(mapStateToProps, mapDispatchToProps)(withRouter(NewCinema1))