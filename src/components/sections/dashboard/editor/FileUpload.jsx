import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('Selected file:', file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement your file upload logic here (e.g., sending the file to a server)
      console.log('Uploading file:', selectedFile.name);
      // Example: You can use FormData to send the file to an API
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Replace with your upload URL
      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Upload successful:', data);
        })
        .catch(error => {
          console.error('Upload failed:', error);
        });
    } else {
      console.log('No file selected for upload');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".bpmn" // Specify the file types you want to accept
        onChange={handleFileChange}
        style={{ display: 'none' }} // Hide the default file input
        id="file-upload" // Assign an ID for the label to use
      />
      <label htmlFor="file-upload" style={{ cursor: 'pointer', padding: '10px', background: '#007bff', color: '#fff', borderRadius: '5px' }}>
        Upload File
      </label>
      <button onClick={handleUpload} style={{ marginLeft: '10px' }}>
        Submit
      </button>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;