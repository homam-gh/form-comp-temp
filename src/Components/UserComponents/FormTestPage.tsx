import React, { Component } from "react";
import CustomFormComp from "../Form";
import InputComponent from "../FormElements/InputComponent";
import SelectComponent from "../FormElements/SelectComponent";
import CheckboxComponent from "../FormElements/CheckboxComponent";
import { IInputData, IFormElData, ICustomFormChildren, IFormProps } from "../FormElements/formModels";
import RadioComponent from "../FormElements/RadioComponent";

interface IState { }

interface IProps { }

export class CustomForm extends Component<IProps, IState> {
  render() {
    const formData: IFormElData = {
      name: "laskdf",
      email: "homam.ghassemy@gmail.com",
      phone: "98713264",
      address: "asdhf akshdfkahsdkahsdflka hsfnasdk f",
      city: "tehran",
      agreement: false,
      gender: 'female'
    };

    const cities = [
      {
        value: "yazd",
        label: "yazd"
      },
      {
        value: "tehran",
        label: "tehran"
      },
      {
        value: "karaj",
        label: "karaj"
      },
      {
        value: "qom",
        label: "qom"
      },
    ]

    return (
      <CustomFormComp FormData={formData}>
        <h2>f</h2>
        asd
        <h3>asdf</h3>
        <div className="c1">
          <div className="c2">
            <div className="c3">
              <InputComponent label="name: " name="name" />
              <InputComponent label="email: " name="email" type="email" />
            </div>
            <div className="c33">
              <RadioComponent label="male" name="gender" value="male" />
              <RadioComponent label="female" name="gender" value="female" />
              <RadioComponent label="other" name="gender" value="other" />
            </div>
          </div>
          <div className="c22">
            <SelectComponent
              name="city"
              label="cities: "
              placeholder="city name"
              options={cities}
            />
          </div>
        </div>
        <InputComponent label="phone: " name="phone" type="number" />
        <InputComponent label="address: " name="address" type="textarea" />
        <CheckboxComponent label="agreement: " name="agreement" />
      </CustomFormComp>
    );
  }
}
