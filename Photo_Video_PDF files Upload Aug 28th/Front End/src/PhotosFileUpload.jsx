// import React, { useState } from "react";
// import axios from "axios";

// const PhotosFileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFiles = [...e.target.files];
//     setFiles(selectedFiles);

//     // Generate previews
//     const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
//     setPreviews(previewUrls);
//   };

//   const handleFileUpload = async () => {
//     if (files.length === 0) {
//       setMessage("Please select files to upload");
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((file) => formData.append("files", file));

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setMessage(`Files uploaded successfully: ${response.data}`);
//     } catch (error) {
//       setMessage(
//         `Error uploading files: ${
//           error.response ? error.response.data : error.message
//         }`
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Photos</h1>
//       <input type="file" multiple onChange={handleFileChange} />
//       <button onClick={handleFileUpload}>Upload</button>
//       <p>{message}</p>

//       <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
//         {previews.map((preview, index) => (
//           <div key={index} style={{ marginRight: "10px" }}>
//             <img
//               src={preview}
//               alt={`preview-${index}`}
//               style={{
//                 width: "150px",
//                 height: "150px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//                 border: "2px solid #ccc",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PhotosFileUpload;

// src/PhotosFileUpload.js
// import React, { useState } from "react";
// import axios from "axios";

// const PhotosFileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previewUrls, setPreviewUrls] = useState([]);
//   const [notification, setNotification] = useState({
//     type: "", // 'success' or 'error'
//     message: "",
//     visible: false,
//   });

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles(selectedFiles);
//     setPreviewUrls(selectedFiles.map((file) => URL.createObjectURL(file)));
//   };

//   const handleFileUpload = async () => {
//     if (files.length === 0) {
//       setNotification({
//         type: "error",
//         message: "Please select files to upload",
//         visible: true,
//       });
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((file) => formData.append("files", file));

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/upload",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setNotification({
//         type: "success",
//         message: `Files uploaded successfully: ${response.data}`,
//         visible: true,
//       });
//     } catch (error) {
//       setNotification({
//         type: "error",
//         message: `Error uploading files: ${
//           error.response ? error.response.data : error.message
//         }`,
//         visible: true,
//       });
//     }
//   };

//   const hideNotification = () => {
//     setNotification((prev) => ({ ...prev, visible: false }));
//   };

//   return (
//     <div className="component-container">
//       <h1>Upload Photos</h1>
//       <input type="file" multiple onChange={handleFileChange} />
//       {previewUrls.length > 0 && (
//         <div className="preview-container">
//           {previewUrls.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={`Preview ${index}`}
//               className="preview-image"
//             />
//           ))}
//         </div>
//       )}
//       <button onClick={handleFileUpload}>Upload</button>
//       {notification.visible && (
//         <div className={`notification notification-${notification.type}`}>
//           <p>{notification.message}</p>
//           <button onClick={hideNotification}>X</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhotosFileUpload;

// src/PhotosFileUpload.js
// import React, { useState } from "react";
// import axios from "axios";

// const PhotosFileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const [previewUrls, setPreviewUrls] = useState([]);
//   const [notification, setNotification] = useState({
//     type: "",
//     message: "",
//     visible: false,
//   });

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles(selectedFiles);
//     setPreviewUrls(selectedFiles.map((file) => URL.createObjectURL(file)));
//   };

//   const handleFileUpload = async () => {
//     if (files.length === 0) {
//       setNotification({
//         type: "error",
//         message: "Please select files to upload",
//         visible: true,
//       });
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((file) => formData.append("files", file));

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/upload",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setNotification({
//         type: "success",
//         message: `Files uploaded successfully: ${response.data}`,
//         visible: true,
//       });
//     } catch (error) {
//       setNotification({
//         type: "error",
//         message: `Error uploading files: ${
//           error.response ? error.response.data : error.message
//         }`,
//         visible: true,
//       });
//     }
//   };

//   const hideNotification = () => {
//     setNotification((prev) => ({ ...prev, visible: false }));
//   };

//   return (
//     <div className="component-container">
//       <h1>Upload Photos</h1>
//       <input type="file" multiple onChange={handleFileChange} />
//       {previewUrls.length > 0 && (
//         <div className="preview-container">
//           {previewUrls.map((url, index) => (
//             <img
//               key={index}
//               src={url}
//               alt={`Preview ${index}`}
//               className="preview-image"
//             />
//           ))}
//         </div>
//       )}
//       <button onClick={handleFileUpload}>Upload</button>
//       {notification.visible && (
//         <div className={`notification notification-${notification.type}`}>
//           <p>{notification.message}</p>
//           <button onClick={hideNotification}>X</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhotosFileUpload;

import React, { useState } from "react";
import axios from "axios";

const PhotosFileUpload = () => {
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [notification, setNotification] = useState({
    type: "",
    message: "",
    visible: false,
  });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreviewUrls(selectedFiles.map((file) => URL.createObjectURL(file)));
  };

  const handleFileUpload = async () => {
    if (files.length === 0) {
      setNotification({
        type: "error",
        message: "Please select files to upload",
        visible: true,
      });
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setNotification({
        type: "success",
        message: `Files uploaded successfully: ${response.data}`,
        visible: true,
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: `Error uploading files: ${
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
      <h1>Upload Photos</h1>
      <input type="file" multiple onChange={handleFileChange} />
      {previewUrls.length > 0 && (
        <div className="preview-container">
          {previewUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Preview ${index}`}
              className="preview-image"
            />
          ))}
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

export default PhotosFileUpload;
