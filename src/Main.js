import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, redirect } from "react-router-dom";

const Main = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const removeCookie = () => {
        Cookies.remove("uid");
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        const uid = Cookies.get("uid")
        formData.append("uid", Cookies.get("uid"));
      
        axios.post("http://localhost:3002/getFiles", { uid: uid }, { headers: { "Content-Type": "application/json" } })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error retrieving files:", error);
  })
      };

    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("uid", Cookies.get("uid"));
            console.log(formData);

            axios
                .post("http://localhost:3002/upload", formData)
                .then((response) => {
                    // Handle the response if needed
                    console.log("File uploaded successfully");
                })
                .catch((error) => {
                    // Handle errors if any
                    console.error("Error uploading file:", error);
                });
        }
    };

    return (
        <div>
            <div className="container text-white">
                <div className="text-white display-4 mt-3 mb-3">
                    Upload UID Documents
                </div>
                <div>
                    <div className="mt-4">
                        <label htmlFor="fileUploader" className="mb-1">
                            ENTER FILE NAME
                        </label>
                    </div>
                    <input type="text" className="w-100 rounded-3" />
                </div>
                <div>
                    <div className="mt-4">
                        <label htmlFor="fileUploader" className="mb-1">
                            ENTER FILE
                        </label>
                    </div>
                    <input
                        type="file"
                        className="form-control"
                        id="fileUploader"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="d-flex justify-content-evenly mt-4">
                    <div className="">
                        <button
                            onClick={handleUpload}
                            className="btn btn-warning"
                        >
                            Upload
                        </button>
                    </div>
                    <div className="">
                        <Link
                            to="/Login"
                            className="btn btn-danger"
                            onClick={removeCookie}
                        >
                            Log out
                        </Link>
                    </div>
                    <div className="">
                        <button type="submit" className="btn btn-success" onClick={handleFileUpload} >GET FILES</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
