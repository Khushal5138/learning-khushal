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
import {
  Container,
  Typography,
  Button,
  Snackbar,
  Alert,
  Input,
  Card,
  CardContent,
  IconButton,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PdfFileUpload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [notification, setNotification] = useState({
    type: "", 
    message: "",
    visible: false,
  });
  const [showPreview, setShowPreview] = useState(true);

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
    <Container>
      <Typography variant="h4" gutterBottom>
        Upload a PDF
      </Typography>
      <Input
        type="file"
        inputProps={{ accept: ".pdf" }}
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
      {showPreview && previewUrl && (
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <iframe
              src={previewUrl}
              title="PDF Preview"
              style={{ width: "100%", height: "500px", border: "none" }}
            />
          </CardContent>
        </Card>
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

export default PdfFileUpload;
