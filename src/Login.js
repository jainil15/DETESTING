
import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = { uid: "",password: "" };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
      
  
    handleSubmit(event) {
        event.preventDefault();
      
        const { uid, password } = this.state;
      
        // Make a POST request to the API endpoint
        axios
          .post("/submit-name", { uid, password })
          .then((response) => {
            // Handle the response if needed
            alert(`Submitted uid: ${uid}\nSubmitted password: ${password}`);
          })
          .catch((error) => {
            // Handle errors if any
            console.error("Error submitting name:", error);
          });
      }
      
  
    render() {
      return (
        <>
          <div id="root1" className="bg-dark bg-gradient text-white w-50 m-auto">
            <div className="container w-75 mt-5">
              <div className="display-2 form-title">Login</div>
              <hr className="hr" />
              <form onSubmit={this.handleSubmit} method="POST">
                <div className="row">
                  <label htmlFor="user-name"  className="m-2">
                    <div className="label mb-1 ms-1 mylabel">
                      ENTER UID NUMBER
                    </div>
                    <input
                      type="text"
                      name="uid"
                      id="uid"
                      onChange={this.handleChange} 
                      className="rounded-5 border-0 w-100 p-2"
                    />
                  </label>
                </div>
                <div className="row mt-2">
                  <label htmlFor="user-name" className="m-2">
                    <div className="label mb-1 ms-1 mylabel">
                      PASSWORD
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.handleChange} 
                      className="rounded-5 border-0 w-100 p-2 "
                    />
                  </label>
                </div>
                <div className=" mt-2 d-flex justify-content-evenly logsin-btns">
                  <div className="mt-3">
                    <input
                      type="submit"
                      defaultValue="login"
                      value={"login"}
                      className="btn btn-primary submit-btn rounded-5"
                    />
                  </div>
                  <div className="mt-3">
                    <input
                      type="submit"
                      defaultValue="signup"
                      value={"sign-up"}
                      className="btn btn-primary submit-btn rounded-5  "
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

  export default Login;

