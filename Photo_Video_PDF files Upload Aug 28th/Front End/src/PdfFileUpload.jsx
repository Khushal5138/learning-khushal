// import React, { useState } from "react";
// import axios from "axios";

// const PdfFileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);

//     // Generate PDF preview
//     if (selectedFile && selectedFile.type === "application/pdf") {
//       setPreview(URL.createObjectURL(selectedFile));
//     } else {
//       setPreview(""); // Clear preview if not a PDF
//       setMessage("Please select a PDF file");
//     }
//   };

//   const handleFileUpload = async () => {
//     if (!file) {
//       setMessage("Please select a file to upload");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setMessage(`File uploaded successfully: ${response.data}`);
//     } catch (error) {
//       setMessage(
//         `Error uploading file: ${
//           error.response ? error.response.data : error.message
//         }`
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Upload a PDF File</h1>
//       <input type="file" onChange={handleFileChange} accept=".pdf" />
//       <button onClick={handleFileUpload}>Upload</button>
//       <p>{message}</p>

//       {preview && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Preview:</h3>
//           <embed
//             src={preview}
//             type="application/pdf"
//             width="100%"
//             height="600px"
//             style={{ border: "2px solid #ccc", borderRadius: "8px" }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default PdfFileUpload;

// src/PdfFileUpload.js
import React, { useState } from "react";
import axios from "axios";

const PdfFileUpload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [notification, setNotification] = useState({
    type: "", // 'success' or 'error'
    message: "",
    visible: false,
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleFileUpload = async () => {
    if (!file) {
      setNotification({
        type: "error",
        message: "Please select a file to upload",
        visible: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setNotification({
        type: "success",
        message: `File uploaded successfully: ${response.data}`,
        visible: true,
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: `Error uploading file: ${
          error.response ? error.response.data : error.message
        }`,
        visible: true,
      });
    }
  };

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="component-container">
      <h1>Upload a PDF</h1>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {previewUrl && (
        <div className="preview-container">
          <iframe
            src={previewUrl}
            title="PDF Preview"
            className="preview-pdf"
          />
        </div>
      )}
      <button onClick={handleFileUpload}>Upload</button>
      {notification.visible && (
        <div className={`notification notification-${notification.type}`}>
          <p>{notification.message}</p>
          <button onClick={hideNotification}>X</button>
        </div>
      )}
    </div>
  );
};

export default PdfFileUpload;
