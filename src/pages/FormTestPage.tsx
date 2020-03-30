import React, { Component } from "react";
import CustomFormComp from "../Components/Form";
import InputComponent from "../Components/InputComponent";
import SelectComponent from "../Components/SelectComponent";
import CheckboxComponent from "../Components/CheckboxComponent";
import { IFormElData } from "../Models/formModels";
import RadioComponent from "../Components/RadioComponent";

interface IState { }

interface IProps { }

export class CustomForm extends Component<IProps, IState> {
  render() {
    const formData: IFormElData = {
      name: "laskdf",
      email: "homam.ghassemy@gmail.com",
      phone: "",
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
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <CustomFormComp FormData={formData}>
                    <h2>Test Form</h2>
                    <h5>Another header to make things more interestin</h5>
                    <p>Simple text paragraf to test recursive functions</p>
                    <div className="c1">
                      <div className="c2">
                        <div className="c3">
                          <InputComponent label="name: " name="name" />
                          <InputComponent label="email: " name="email" type="email" />
                        </div>
                        <div className="c33">
                          <div className="row">
                            <div className="col">
                              <RadioComponent label="male" name="gender" value="male" />
                            </div>
                            <div className="col">
                              <RadioComponent label="female" name="gender" value="female" />
                            </div>
                            <div className="col">
                              <RadioComponent label="other" name="gender" value="other" />
                            </div>
                          </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
