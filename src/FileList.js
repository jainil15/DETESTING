import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const uid = Cookies.get("uid");
        const response = await axios.post(
          "http://localhost:3002/getFiles",
          { uid: uid }
        );
        setFiles(response.data.result);
      } catch (error) {
        console.error("Error fetching file data:", error);
      }
    };

    fetchFiles();
  }, []);

  const downloadFile = async (filePath, fileName) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/downloadFile",
        { filePath: filePath, fileName: fileName },
        { responseType: "blob" }
      );
  
      // Create a download link
      const downloadUrl = URL.createObjectURL(new Blob([response.data]));
  
      // Create a temporary link element
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
  
      // Trigger the click event to start the download
      link.click();
  
      // Clean up the temporary link element
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="App2">
      {files.map((file, index) => (
        <div key={index}>
          <h1>{file.original_name}</h1>
          <button onClick={() => downloadFile(file.file_path, file.file_name)}>Download</button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
