import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Home.css";
import Faqs from "./Faqs";
import HowToUse from "./HowToUse";

const ImageCompressor = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [quality, setQuality] = useState(80);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [keepAspectRatio, setKeepAspectRatio] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileSize, setFileSize] = useState({ original: 0, compressed: 0 });
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef(null);
  const originalImageRef = useRef(null);
  const dropAreaRef = useRef(null);

  // Clean up object URLs when component unmounts
  useEffect(() => {
    return () => {
      if (originalImage) URL.revokeObjectURL(originalImage);
      if (compressedImage) URL.revokeObjectURL(compressedImage);
    };
  }, [originalImage, compressedImage]);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length === 0) return;

    processImageFile(files[0]);
  }, []);

  const handleFileInput = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) return;

    processImageFile(file);
  }, []);

  const processImageFile = useCallback((file) => {
    if (!file.type.match("image.*")) {
      setError("Please select an image file");
      return;
    }

    setError(null);
    setFileName(file.name.split(".")[0]);
    setFileType(file.type.split("/")[1] || "jpeg"); // Get actual file type

    const imgUrl = URL.createObjectURL(file);
    setOriginalImage(imgUrl);
    setFileSize((prev) => ({ ...prev, original: file.size }));

    const img = new Image();
    img.onload = () => {
      setWidth(img.width);
      setHeight(img.height);
    };
    img.onerror = () => {
      setError("Failed to load image");
      URL.revokeObjectURL(imgUrl);
    };
    img.src = imgUrl;
  }, []);

  useEffect(() => {
    const dropArea = dropAreaRef.current;
    if (!dropArea) return;

    dropArea.addEventListener("dragenter", handleDragEnter);
    dropArea.addEventListener("dragleave", handleDragLeave);
    dropArea.addEventListener("dragover", handleDragOver);
    dropArea.addEventListener("drop", handleDrop);

    return () => {
      dropArea.removeEventListener("dragenter", handleDragEnter);
      dropArea.removeEventListener("dragleave", handleDragLeave);
      dropArea.removeEventListener("dragover", handleDragOver);
      dropArea.removeEventListener("drop", handleDrop);
    };
  }, [handleDragEnter, handleDragLeave, handleDragOver, handleDrop]);

  const compressImage = () => {
    if (!originalImage) return;

    setIsProcessing(true);
    setError(null);

    const img = new Image();
    img.onload = () => {
      try {
        const canvas = canvasRef.current;
        if (!canvas) throw new Error("Canvas not available");

        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas context not available");

        let newWidth = width > 0 ? Math.max(1, width) : 0;
        let newHeight = height > 0 ? Math.max(1, height) : 0;

        if (keepAspectRatio) {
          const aspectRatio = img.width / img.height;
          if (newWidth > 0) {
            newHeight = Math.round(newWidth / aspectRatio);
          } else if (newHeight > 0) {
            newWidth = Math.round(newHeight * aspectRatio);
          } else {
            newWidth = img.width;
            newHeight = img.height;
          }
        }

        canvas.width = newWidth || img.width;
        canvas.height = newHeight || img.height;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const mimeType = fileType === "png" ? "image/png" : "image/jpeg";

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              throw new Error("Compression failed");
            }

            const compressedUrl = URL.createObjectURL(blob);
            setCompressedImage(compressedUrl);
            setFileSize((prev) => ({ ...prev, compressed: blob.size }));
            setIsProcessing(false);
          },
          mimeType,
          quality / 100
        );
      } catch (err) {
        setError(err.message);
        setIsProcessing(false);
      }
    };

    img.onerror = () => {
      setError("Failed to load image for compression");
      setIsProcessing(false);
    };

    img.src = originalImage;
  };

  const downloadImage = () => {
    if (!compressedImage || !originalImageRef.current) return;

    try {
      const aspectRatio =
        originalImageRef.current.naturalWidth /
        originalImageRef.current.naturalHeight;
      const finalWidth =
        width > 0 ? Math.round(width) : Math.round(height * aspectRatio);
      const finalHeight =
        height > 0 ? Math.round(height) : Math.round(width / aspectRatio);

      const link = document.createElement("a");
      link.href = compressedImage;
      link.download = `${fileName}_compressed${
        quality < 100 ? `_q${quality}` : ""
      }${width || height ? `_${finalWidth}x${finalHeight}` : ""}.${fileType}`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError("Failed to download image");
    }
  };

  const resetAll = () => {
    if (originalImage) URL.revokeObjectURL(originalImage);
    if (compressedImage) URL.revokeObjectURL(compressedImage);

    setOriginalImage(null);
    setCompressedImage(null);
    setFileName("");
    setFileType("");
    setQuality(80);
    setWidth(0);
    setHeight(0);
    setFileSize({ original: 0, compressed: 0 });
    setError(null);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i]);
  };

  const handleDimensionChange = (e, type) => {
    const value = parseInt(e.target.value) || 0;
    if (type === "width") {
      setWidth(value);
    } else {
      setHeight(value);
    }
  };

  return (
    <div className="home-page container">
      <h1 className="page-title">Image Compressor & Resizer</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="upload-section">
        <div
          ref={dropAreaRef}
          className={`drop-area ${isDragging ? "dragging" : ""} ${
            originalImage ? "has-image" : ""
          }`}
        >
          {!originalImage ? (
            <>
              <div className="drop-instructions">
                <p>Drag & Drop your image here</p>
                <p className="or-text">or</p>
                <label className="browse-btn">
                  Browse Files
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileInput}
                    disabled={isProcessing}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
              {isDragging && (
                <div className="drop-overlay">Drop your image here</div>
              )}
            </>
          ) : (
            <div className="image-actions">
              <label className="change-btn">
                Change Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileInput}
                  disabled={isProcessing}
                  style={{ display: "none" }}
                />
              </label>
              <button
                className="reset-btn"
                onClick={resetAll}
                disabled={isProcessing}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>

      {originalImage && (
        <div className="controls">
          <div className="control-group">
            <label>Quality: {quality}%</label>
            <input
              type="range"
              min="1"
              max="100"
              value={quality}
              onChange={(e) => setQuality(parseInt(e.target.value))}
              disabled={isProcessing}
            />
          </div>

          <div className="dimensions-control">
            <div className="control-group">
              <label>Width:</label>
              <input
                type="number"
                value={width || ""}
                onChange={(e) => handleDimensionChange(e, "width")}
                placeholder="auto"
                min="0"
                disabled={isProcessing}
              />
            </div>

            <div className="control-group">
              <label>Height:</label>
              <input
                type="number"
                value={height || ""}
                onChange={(e) => handleDimensionChange(e, "height")}
                placeholder="auto"
                min="0"
                disabled={isProcessing}
              />
            </div>
          </div>

          <div className="control-group checkbox-group">
            <input
              type="checkbox"
              id="aspectRatio"
              checked={keepAspectRatio}
              onChange={(e) => setKeepAspectRatio(e.target.checked)}
              disabled={isProcessing}
            />
            <label htmlFor="aspectRatio">Maintain aspect ratio</label>
          </div>

          <button
            className="compress-btn"
            onClick={compressImage}
            disabled={isProcessing || !originalImage}
          >
            {isProcessing ? "Processing..." : "Compress Image"}
          </button>
        </div>
      )}

      <div className="image-preview-container">
        {originalImage && (
          <div className="image-preview">
            <h3>Original ({formatFileSize(fileSize.original)})</h3>
            <img
              ref={originalImageRef}
              src={originalImage}
              alt="Original"
              className="preview-image"
              onError={() => setError("Failed to display original image")}
            />
          </div>
        )}

        {compressedImage && (
          <div className="image-preview">
            <h3>Compressed ({formatFileSize(fileSize.compressed)})</h3>
            <img
              src={compressedImage}
              alt="Compressed"
              className="preview-image"
              onError={() => setError("Failed to display compressed image")}
            />
            <button
              className="download-btn"
              onClick={downloadImage}
              disabled={isProcessing}
            >
              Download Compressed Image
            </button>
            {fileSize.original > 0 && fileSize.compressed > 0 && (
              <div className="compression-info">
                Compression:{" "}
                {Math.round(
                  (1 - fileSize.compressed / fileSize.original) * 100
                )}
                % smaller
              </div>
            )}
          </div>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

function Home() {
  return (
    <div>
      <ImageCompressor />
      {}
      <HowToUse />
      {}
      <Faqs />
    </div>
  );
}

export default Home;
