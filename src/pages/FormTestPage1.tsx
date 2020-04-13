import React, { Component } from "react"
import NewForm from "../Components/NewForm"
import NewFormInput from "../Components/NewFormInput"

interface IState { }

interface IProps { }

export class CustomForm1 extends Component<IProps, IState> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('form submitted')
  }

  handleReset = () => {
    alert('form reset')
  }

  render() {
    const initialFormData = {
      firstName: {
        name: 'firstName',
        value: 'homam',
        validationMessage: 'this field is mandatory',
        isValid: false,
        showMessage: false
      },
      lastName: {
        name: 'lastName',
        value: 'ghassemy',
        validationMessage: 'this field is mandatory',
        isValid: false,
        showMessage: false
      },
      email: {
        name: 'email',
        value: 'homam.ghassemy@gmail.com',
        validationMessage: 'enter a valid email',
        isValid: false,
        showMessage: false
      },
      phone: {
        name: 'phone',
        value: '09124023656',
        validationMessage: 'enter a valid phone number containing only numbers',
        isValid: false,
        showMessage: false
      },
      city: {
        name: 'city',
        value: 'tehran',
        validationMessage: 'select a city',
        isValid: false,
        showMessage: false
      },
      gender: {
        name: 'gender',
        value: 'male',
        validationMessage: '',
        isValid: false,
        showMessage: false
      }
    }

    const cities = [
      {
        value: "yazd",
        label: "Yazd"
      },
      {
        value: "tehran",
        label: "Tehran"
      },
      {
        value: "karaj",
        label: "Karaj"
      },
      {
        value: "qom",
        label: "Qom"
      },
    ]

    return (
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <NewForm
                    id="dalli"
                    className="test class"
                    onSubmit={this.handleSubmit}
                    onReset={this.handleReset}
                    formData={initialFormData}
                  >
                    <h2>Test Form</h2>
                    <h5>Another header to make things more interestin</h5>
                    Simple text paragraf to test recursive functions
                    <p>the next is an empty H1 tag</p>
                    <h1></h1>
                    {/* <NewFormInput
                    /> */}


                    <div className="form-group">
                      <label>{initialFormData.firstName.name.toUpperCase()}</label>
                      <input
                        value={initialFormData.firstName.value}
                        className="form-control"
                      />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-secondary">Secondary</button>
                  </NewForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default CustomForm1