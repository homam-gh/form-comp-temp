import React ,{Component} from "react"
import {Table, Button} from "react-bootstrap"
import {IPlaceModel} from "../Models/PlaceModel"
import {ETranslator} from "../Constants/Translator"
import { connect } from "react-redux";
import {mapDispatchToProps} from "../Redux/MapDispatchToProps/MapDispatchToProps"
import {mapStateToProps} from "../Redux/MapStateToProps/MapStateToProps"
import { withRouter, RouteComponentProps } from "react-router-dom";
import {IstateEditCinema} from "../Models/CinemaModel"
import * as H from 'history'


interface IProps extends RouteComponentProps {
  onEditCinema(data:IstateEditCinema):void,
      dataList:Array<IPlaceModel>,
     route : string,
     addItem(history: H.History):void,
     editItem (cinema:IPlaceModel,index:number):void
  
  }
  
interface IState{}

 class ListSearch1 extends Component<IProps,IState>{

    addCinema = ()=>{
      this.props.addItem(this.props.history)

        
    }
    handleEdit = (cinema:IPlaceModel,index:number) => {
      this.props.editItem(cinema,index)
    }
 

render() {
 
    return (
        <Table striped hover  className="align-right">
  <thead >
    <tr>
      <th></th>
    <th>{ETranslator.NAME}</th>
    <th colSpan={2}>{ETranslator.ADDRESS}</th>
    </tr>
  </thead>
  <tbody>
  
    <tr>
   
      <td colSpan={4}>
        <Button onClick={this.addCinema}  variant="primary" size="lg" block> {ETranslator.ADD}</Button>
      
               </td>
     
    </tr>
    
             {this.props.dataList.length>0?
            this.props.dataList.map((item:IPlaceModel,index:number)=>{
                return(
                    <tr key={index}>
            <td>{index+1}</td> 
                    <td>
                     {item.name}
                    </td>
                    <td>
                     {item.address}
                    </td>
                    <td> 
                <Button variant="outline-info" onClick={()=>this.handleEdit(item,index)}>{ETranslator.EDIT}</Button>
                    
                       </td>
                   
                
                  </tr>
                )
            }):null}
 
  </tbody>
</Table>
    )
}
}


export const ListSearch = connect(mapStateToProps,mapDispatchToProps)(withRouter(ListSearch1))