import React, {Component} from "react"
import {ListSearch} from "../../Container/List"
import {withRouter, RouteComponentProps} from "react-router-dom";
import {IPlaceModel} from "../../Models/PlaceModel"
import {connect} from "react-redux";
// import {mapDispatchToProps} from "../../Redux/MapDispatchToProps/MapDispatchToProps"
//import {mapStateToProps} from "../../Redux/MapStateToProps/MapStateToProps"
import {IstateEditCinema} from "../../Models/CinemaModel"
import {routes} from "../../Constants/Routs"
import {addCinema} from "../../Redux/Actions/addCinema"
import {onEditCinema} from "../../Redux/Actions/onEditCinema"
import {IStoreRedux} from "../../Redux/Store/StoreModel"
import {Dispatch} from "redux"
import * as H from 'history';


interface IProps extends RouteComponentProps {
    cinemas:Array<IPlaceModel>
    onEditCinema (data:IstateEditCinema):void
    /* Parent component's props*/
}

interface IState {}

class CinemaList1 extends Component<IProps, IState> {
 
    componentDidMount() {
    }

    addCinema = (history: H.History) => {
        let newCinema: IstateEditCinema = {
            name: "",
            description: "",
            address: "",
            index: -1
        }
        this.props.onEditCinema(newCinema)
        history.replace(routes.NEW_CINEMA)
    }

    handleEdit = (cinema: IPlaceModel, index: number) => {
        let newData = {
            name: cinema.name,
            description: cinema.description,
            address: cinema.address,
            index: index
        }
        this.props.onEditCinema(newData)
        this.props.history.replace(`cinemas/:${cinema.name}`)
    }

    render() {
  
        let thisList= this.props.cinemas
        return (
            <div>
                <ListSearch
                    addItem={this.addCinema}
                    editItem={this.handleEdit}
                    dataList={thisList} route="cinemas"/>
            </div>
        )
    }
}

 const mapDispatchToProps= (dispatch:Dispatch)=>{
    return{

        onEditCinema : (data:IstateEditCinema)=>{
            dispatch(onEditCinema(data))
        },
       
}}
 const mapStateToProps = (state:IStoreRedux) =>{
    return{cinemas:state.cinemas}
}

export const CinemaList = connect(mapStateToProps, mapDispatchToProps)(withRouter(CinemaList1))