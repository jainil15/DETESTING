import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Main = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("uid", Cookies.get("uid"))
            console.log(formData)
            
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
                    <input
                        type="text"
                        className="w-100 rounded-3"
                    />
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
                <div className="mt-4">
                    <button onClick={handleUpload} className="btn btn-warning">
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;
