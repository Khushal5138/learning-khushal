// import React, { useState } from "react";
// import axios from "axios";

// const VideoFilesUpload = () => {
//   const [videos, setVideos] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFiles = [...e.target.files];
//     setVideos(selectedFiles);

//     // Generate previews
//     const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
//     setPreviews(previewUrls);
//   };

//   const handleFileUpload = async () => {
//     if (videos.length === 0) {
//       setMessage("Please select videos to upload");
//       return;
//     }

//     const formData = new FormData();
//     videos.forEach((video) => formData.append("videos", video));

//     try {
//       const response = await axios.post(
//         "http://localhost:3002/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setMessage(`Videos uploaded successfully: ${response.data}`);
//     } catch (error) {
//       setMessage(
//         `Error uploading videos: ${
//           error.response ? error.response.data : error.message
//         }`
//       );
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Videos</h1>
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange}
//         accept=".mp4,.wmv"
//       />
//       <button onClick={handleFileUpload}>Upload</button>
//       <p>{message}</p>

//       <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
//         {previews.map((preview, index) => (
//           <div key={index} style={{ marginRight: "10px" }}>
//             <video
//               src={preview}
//               controls
//               style={{
//                 width: "200px",
//                 height: "150px",
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

// export default VideoFilesUpload;

// src/VideoFilesUpload.js
import React, { useState } from "react";
import axios from "axios";

const VideoFilesUpload = () => {
  const [videos, setVideos] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [notification, setNotification] = useState({
    type: "", // 'success' or 'error'
    message: "",
    visible: false,
  });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setVideos(selectedFiles);
    setPreviewUrls(selectedFiles.map((file) => URL.createObjectURL(file)));
  };

  const handleFileUpload = async () => {
    if (videos.length === 0) {
      setNotification({
        type: "error",
        message: "Please select videos to upload",
        visible: true,
      });
      return;
    }

    const formData = new FormData();
    videos.forEach((video) => formData.append("videos", video));

    try {
      const response = await axios.post(
        "http://localhost:3002/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setNotification({
        type: "success",
        message: `Videos uploaded successfully: ${response.data}`,
        visible: true,
      });
    } catch (error) {
      setNotification({
        type: "error",
        message: `Error uploading videos: ${
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
      <h1>Upload Videos</h1>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept=".mp4,.wmv"
      />
      {previewUrls.length > 0 && (
        <div className="preview-container">
          {previewUrls.map((url, index) => (
            <video key={index} src={url} controls className="preview-video" />
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

export default VideoFilesUpload;
