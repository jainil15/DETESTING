import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    };
  }

  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  }

  handleFileUpload = () => {
    // Perform file upload logic here
    const { selectedFile } = this.state;
    // Use the selectedFile to upload the file to the server
    // You can make an API call or use any file upload library

    // Reset the selected file
    this.setState({
      selectedFile: null
    });
  }

  render() {
    const { selectedFile } = this.state;

    return (
      <div>
        <h1>Main Page</h1>
        <div>
          <input type="file" onChange={this.handleFileChange} />
          <button onClick={this.handleFileUpload} disabled={!selectedFile}>Upload File</button>
        </div>
      </div>
    );
  }
}

export default Main;