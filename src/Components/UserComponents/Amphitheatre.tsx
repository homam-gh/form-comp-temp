import React, { Component } from "react"
import { Form, Col, Button, ButtonToolbar } from "react-bootstrap"
import { ETranslator } from "../../Constants/Translator"
import { IPlaceModel } from "../../Models/PlaceModel"
import { connect } from "react-redux";
// import { mapDispatchToProps } from "../../Redux/MapDispatchToProps/MapDispatchToProps"
// import { mapStateToProps } from "../../Redux/MapStateToProps/MapStateToProps"
import { withRouter, RouteComponentProps } from "react-router-dom";
import { routes } from "../../Constants/Routs"
import {ISalonModel} from "../../Models/svgPlanModel"
import {IStoreRedux} from "../../Redux/Store/StoreModel"
import {IApheatreModel} from "../../Models/AmpheatreModel"
import {addAmphitheatre} from "../../Redux/Actions/AddAmphitheatre"
import {IAnAmphitheatreModel} from "../../Models/AmpheatreModel"
import {Dispatch} from "redux"

interface IProps extends RouteComponentProps<any> {
	addAmphitheatre(data:IApheatreModel): void
	amphitheatre:IAnAmphitheatreModel
}

interface IState {
	name: string,
	chair: number,
	floor: number,
	cinema: string,
	svgTranslate: ISalonModel	
}

class Amphitheatre1 extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
			this.state = {
				name: this.props.amphitheatre.name,
				chair: this.props.amphitheatre.chair,
				floor: this.props.amphitheatre.floor,
				cinema: this.props.amphitheatre.cinema,
				svgTranslate:  {id:"",
				name: "",
				plan :[]
			}
		}
	}

	handleInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
		let item: string = e.target.name
		let newValue: any = e.target.value
		switch (item) {
			case "name":
				return this.setState({ name: newValue })
			case "floor":
				return this.setState({ floor: newValue })
			case "chair":
				return this.setState({ chair: newValue })
			default: return
		}
	}

	submitForm = () => {
		const { name, floor, chair ,svgTranslate} = this.state
		const newAmphi: IApheatreModel= { name: name, floor: floor, chair: chair, svgTranslate:svgTranslate ,cinema:this.props.amphitheatre.cinema }
		this.props.addAmphitheatre(newAmphi)
		this.props.history.replace(`/cinemas`)
	}

	controlEmpty = () => {
		const { name, chair, floor, svgTranslate } = this.state
		if (name === "" || chair === 0 || floor === 0 || svgTranslate.id === "") {
			return true
		}
		return false
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

	editButton = () => {
		return (
			<div>
				<ButtonToolbar>
					<Button
						//  disabled={this.controlEmpty()} 
						className="margin-button" variant="primary"
					//  onClick={this.handleEdit}
					>{ETranslator.SAVE}</Button>
					<Button className="margin-button" variant="danger"
					// onClick={this.handleDeletCinema}
					>{ETranslator.DELETE}</Button>
					<Button className="margin-button" variant="secondary" onClick={this.handleCancel}>{ETranslator.CANCEL}</Button>

				</ButtonToolbar>
			</div>
		)
	}

	handleCancel = () => {
		this.props.history.replace(routes.CINEMAS)
	}

    handleChange() {
        if (!this.myinp) return
        const sample = this.myinp.files

		if (!sample) return
        const selectedFile = sample[0]
		
        const reader = new FileReader()
        reader.onload = (e) => {
			if (!e.target || !e.target.result) return
			
			const readXml: any = e.target.result
			
			if (this.previewContainer) this.previewContainer.innerHTML = readXml;
			this.translateSVG(readXml)
        }
        reader.readAsText(selectedFile);
	}

	translateSVG(s:string) {
		const parser = new DOMParser()
		const doc = parser.parseFromString(s, "application/xml");
		let nodeList = doc.querySelectorAll('[id^=s]')
		this.createSaloonData(nodeList)	
	}

	createSaloonData(e:any) {
		let saloonData :ISalonModel = {id:"",
		name: "",
		plan :[]
	}

		let saloonList: Array<string>=[]
		let zoneList :Array<Array<string>> =[]
		let chairList : Array<Array<string>> =[]
	

		for(const property of e) {
			if (!property.id) {return} 
			let tmpData = property.id.split('_')
		

			switch (tmpData.length) {
				case 1:
					saloonList.push(tmpData[0]) 
					break;
				 case 2:
					zoneList.push(tmpData)
				 	break;
				 case 3:					
					chairList.push(tmpData)
				 	break;
			
				default:
					break;
			}

		}
		saloonData.id = saloonList[0]
		saloonData.name = this.state.name
	
		if (zoneList.length>0){
			for (const item of zoneList){
				const newChairList = this.addChair(item[1],chairList)
				saloonData.plan.push({id:item[1], name:""
					,chairs:newChairList
				})
				
				}
		}

		this.setState({svgTranslate:saloonData})
	}

	addChair(id:string, list:Array<Array<string>>) {	
		if (list.length>0) {
			let newChairs= [] 
			for (let property of list) {
				if (property[1]===id){
					newChairs.push({id:property[2], tag:""})
				}
			} 
			return newChairs
		}
	}
	
	myinp: any | null = null;
	
    previewContainer: HTMLElement | null = null;

	render() {
		return (
			<div>
				<h3>{ETranslator.CINEMA_NAME}: {this.props.amphitheatre.cinema}</h3>
				<div className="form-box">
					<Form className="align-right">
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>{ETranslator.AMPHITHEATRE_NAME}</Form.Label>
								<Form.Control
									type="text"
									placeholder={ETranslator.ENTER_AMPHITHEATRE_NAME}
									name="name"
									value={this.state.name}
									onChange={this.handleInput}
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Label>{ETranslator.NUMBER_OF_FLOOR}</Form.Label>
								<Form.Control
									type="number"
									name="floor"
									// value = {this.state.floor}
									onChange={this.handleInput}
									placeholder={ETranslator.ENTER_NUMBER_OF_FLOOR}
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Label>{ETranslator.NUMBER_OF_CHAIR}</Form.Label>
								<Form.Control
									type="number"
									name="chair"
									//value = {this.state.chair}
									onChange={this.handleInput}
									placeholder={ETranslator.ENTER_NUMBER_OF_CHAIR}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>{ETranslator.UPLOAD_PLAN}</Form.Label>
								<Form.Control
									type="file"
									onChange={() => this.handleChange()}
									name="description"
									//  value = {this.state.description}
									//  onChange={this.handleInput} 
									placeholder={ETranslator.DESCRIPTION}
									accept="image/svg+xml"
									ref={(e:any) => this.myinp = e}
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<div
									className="prewiev-plan"
									ref={(e) => this.previewContainer = e}
								></div>
								{/* <Form.Label>{ETranslator.UPLOAD_PLAN}</Form.Label>
								<Form.Control
									type="file"
									name="description"
									//  value = {this.state.description}
									//  onChange={this.handleInput} 
									placeholder={ETranslator.DESCRIPTION}
								/> */}
							</Form.Group>
						</Form.Row>
						{/* {this.props.match.params.id !=="newcinema"?this.addAmphitheatre():null} */}
						{this.props.amphitheatre.name === "" ? this.newButton() : this.editButton()}
					</Form>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps= (dispatch:Dispatch) => {
    return {
        addAmphitheatre :(data:IApheatreModel) => { 
            dispatch(addAmphitheatre(data))
        }
	}
}

const mapStateToProps = (state:IStoreRedux) => {
    return {amphitheatre:state.amphitheatre}
}

export const Amphitheatre = connect(mapStateToProps, mapDispatchToProps)(withRouter(Amphitheatre1))
