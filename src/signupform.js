import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      address: "",
      gender: "",
      phoneNumber: "",
      email: "",
      birthdate: "",
      district: "",
      area: "",
      zipcode: "",
      state: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Make a POST request to the API endpoint
    axios
      .post("http://localhost:3003/signup", this.state)
      .then((response) => {
        // Handle the response if needed
        alert("Sign-up successful");
      })
      .catch((error) => {
        // Handle errors if any
        console.error("Error signing up:", error);
      });
  }

  render() {
    return (
      <>
        <div
          id="root1"
          className="bg-dark bg-gradient text-white w-50 m-auto p-3"
        >
          <div className="container w-75 mt-5">
            <div className="display-2 form-title">Sign Up</div>
            <hr className="hr" />
            <form onSubmit={this.handleSubmit} method="POST">
              <div className="row">
                <label htmlFor="username" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Username:
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2"
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="password" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Password:
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="address" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Address:
                  </span>
                  <textarea
                    type="text"
                    name="address"
                    id="address"
                    rows={5}
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
              <label htmlFor="gender" className="m-2">
  <span className="label mb-1 ms-1 mylabel">Gender:</span>
  <div className="d-flex justify-content-between w-50 p-2 mt-1">
  <div>
    <input
      type="radio"
      name="gender"
      id="male"
      value="Male"
      checked={this.state.gender === "Male"}
      onChange={this.handleChange}
      className="form-check-input"
    />
    <label htmlFor="male" className="form-check-label">Male</label>
  </div>
  <div>
    <input
      type="radio"
      name="gender"
      id="female"
      value="Female"
      checked={this.state.gender === "Female"}
      onChange={this.handleChange}
      className="form-check-input"
    />
    <label htmlFor="female" className="form-check-label">Female</label>
  </div>
  </div>
</label>
              </div>
              <div className="row mt-2">
                <label htmlFor="phoneNumber" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Phone Number:
                  </span>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="email" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Email ID:
                  </span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="birthdate" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Birthdate:
                  </span>
                  <input
                    type="date" // Change the input type to "date"
                    name="birthdate"
                    id="birthdate"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="district" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    District:
                  </span>
                  <input
                    type="text"
                    name="district"
                    id="district"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="area" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Area:
                  </span>
                  <input
                    type="text"
                    name="area"
                    id="area"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="zipcode" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    Zip Code:
                  </span>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="row mt-2">
                <label htmlFor="state" className="m-2">
                  <span className="label mb-1 ms-1 mylabel">
                    State:
                  </span>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    onChange={this.handleChange}
                    className="rounded-5 border-0 w-100 p-2 "
                  />
                </label>
              </div>
              <div className="mt-2 d-flex justify-content-evenly logsin-btns">
                <div className="mt-3">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary submit-btn rounded-5"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SignUpForm;
