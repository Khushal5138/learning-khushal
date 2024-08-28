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
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  Snackbar,
  Alert,
  Input,
  IconButton,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const VideoFilesUpload = () => {
  const [videos, setVideos] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [notification, setNotification] = useState({
    type: "",
    message: "",
    visible: false,
  });
  const [showPreview, setShowPreview] = useState(true);

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
    <Container>
      <Typography variant="h4" gutterBottom>
        Upload Videos
      </Typography>
      <Input
        type="file"
        inputProps={{ multiple: true, accept: ".mp4,.wmv" }}
        onChange={handleFileChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Box display="flex" alignItems="center" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleFileUpload}
          sx={{ mr: 2 }}>
          Upload
        </Button>
        <IconButton
          onClick={() => setShowPreview(!showPreview)}
          color="primary">
          {showPreview ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </Box>
      {showPreview && previewUrls.length > 0 && (
        <Grid container spacing={2}>
          {previewUrls.map((url, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  position: "relative",
                  width: "350%",
                  height: "400px",
                  overflow: "visible",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <CardMedia
                  component="video"
                  src={url}
                  controls
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Snackbar
        open={notification.visible}
        autoHideDuration={6000}
        onClose={hideNotification}>
        <Alert
          onClose={hideNotification}
          severity={notification.type}
          sx={{ width: "100%" }}>
          {notification.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default VideoFilesUpload;
