import React, { useState, useEffect } from 'react';
import './Admin.css';
import { uploadImage, isCloudinaryConfigured, getThumbnail } from '../utils/cloudinary';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  const [imageCategory, setImageCategory] = useState('events');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);

  const categories = [
    { id: 'events', name: 'Events' },
    { id: 'poya', name: 'Poya Day' },
    { id: 'vassana', name: 'Vassana Retreat' },
    { id: 'dhammaschool', name: 'Dhamma School' },
    { id: 'temple', name: 'Temple' }
  ];

  // Check authentication on mount
  useEffect(() => {
    const savedAuth = sessionStorage.getItem('adminAuthenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
    loadGalleryItems();
  }, []);

  // Load gallery items from localStorage
  const loadGalleryItems = () => {
    const stored = localStorage.getItem('galleryItems');
    if (stored) {
      try {
        const items = JSON.parse(stored);
        setGalleryItems(items);
      } catch (e) {
        console.error('Error loading gallery items:', e);
      }
    }
  };

  // Handle password authentication
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in production, this should be handled by a backend
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD || 'admin123';
    
    if (password === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      setError('');
      setPassword('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
    setSelectedFile(null);
    setPreviewUrl(null);
    setImageTitle('');
    setImageCategory('events');
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Image size must be less than 10MB');
        return;
      }

      setSelectedFile(file);
      setError('');
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload
  const handleUpload = async (e) => {
    e.preventDefault();
    
    if (!selectedFile) {
      setError('Please select an image file');
      return;
    }

    if (!imageTitle.trim()) {
      setError('Please enter an image title');
      return;
    }

    if (!isCloudinaryConfigured()) {
      setError('Cloudinary is not configured. Please set REACT_APP_CLOUDINARY_CLOUD_NAME and REACT_APP_CLOUDINARY_UPLOAD_PRESET in your .env file');
      return;
    }

    setUploading(true);
    setError('');
    setUploadProgress(0);

    try {
      // Generate a unique folder path based on category
      const folder = `gallery/${imageCategory}`;
      
      // Upload to Cloudinary
      const result = await uploadImage(selectedFile, folder, {
        tags: [imageCategory, 'gallery']
      });

      // Create gallery item
      const newItem = {
        id: Date.now(),
        category: imageCategory,
        title: imageTitle,
        imagePublicId: result.public_id,
        uploadedAt: new Date().toISOString()
      };

      // Add to gallery items
      const updatedItems = [...galleryItems, newItem];
      setGalleryItems(updatedItems);
      
      // Save to localStorage
      localStorage.setItem('galleryItems', JSON.stringify(updatedItems));
      
      // Dispatch custom event to update Gallery if it's open in the same tab
      window.dispatchEvent(new Event('galleryItemsUpdated'));

      // Reset form
      setSelectedFile(null);
      setPreviewUrl(null);
      setImageTitle('');
      setImageCategory('events');
      document.getElementById('file-input').value = '';
      setUploadProgress(100);
      
      setTimeout(() => {
        setUploadProgress(0);
        setUploading(false);
        alert('Image uploaded successfully!');
      }, 1000);

    } catch (err) {
      console.error('Upload error:', err);
      setError(err.message || 'Failed to upload image. Please try again.');
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // Handle delete item
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this image from the gallery?')) {
      const updatedItems = galleryItems.filter(item => item.id !== id);
      setGalleryItems(updatedItems);
      localStorage.setItem('galleryItems', JSON.stringify(updatedItems));
      
      // Dispatch custom event to update Gallery if it's open in the same tab
      window.dispatchEvent(new Event('galleryItemsUpdated'));
    }
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <div className="login-card">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <div className="admin-header">
          <h1>Gallery Admin Panel</h1>
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        </div>

        {/* Upload Form */}
        <div className="upload-section">
          <h2>Upload New Image</h2>
          
          {!isCloudinaryConfigured() && (
            <div className="warning-box">
              <strong>⚠️ Cloudinary Not Configured</strong>
              <p>Please set the following environment variables in your .env file:</p>
              <ul>
                <li>REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name</li>
                <li>REACT_APP_CLOUDINARY_UPLOAD_PRESET=your-upload-preset</li>
              </ul>
              <p>You also need to create an unsigned upload preset in your Cloudinary dashboard.</p>
            </div>
          )}

          <form onSubmit={handleUpload} className="upload-form">
            <div className="form-group">
              <label htmlFor="file-input">Select Image</label>
              <input
                type="file"
                id="file-input"
                accept="image/*"
                onChange={handleFileChange}
                disabled={uploading}
                required
              />
              {previewUrl && (
                <div className="preview-container">
                  <img src={previewUrl} alt="Preview" className="preview-image" />
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="image-title">Image Title</label>
              <input
                type="text"
                id="image-title"
                value={imageTitle}
                onChange={(e) => setImageTitle(e.target.value)}
                placeholder="e.g., New Year Celebration 2024"
                disabled={uploading}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image-category">Category</label>
              <select
                id="image-category"
                value={imageCategory}
                onChange={(e) => setImageCategory(e.target.value)}
                disabled={uploading}
                required
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            {error && <div className="error-message">{error}</div>}

            {uploadProgress > 0 && (
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${uploadProgress}%` }}>
                  {uploadProgress}%
                </div>
              </div>
            )}

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={uploading || !selectedFile}
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          </form>
        </div>

        {/* Gallery Items List */}
        <div className="gallery-management">
          <h2>Manage Gallery ({galleryItems.length} items)</h2>
          
          {galleryItems.length === 0 ? (
            <p className="no-items">No images uploaded yet.</p>
          ) : (
            <div className="gallery-items-list">
              {galleryItems.map(item => (
                <div key={item.id} className="gallery-item-card">
                  <div className="item-thumbnail">
                    {item.imagePublicId ? (
                      <img 
                        src={getThumbnail(item.imagePublicId, 150)} 
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150?text=Image';
                        }}
                      />
                    ) : (
                      <div className="placeholder-thumb">No Image</div>
                    )}
                  </div>
                  <div className="item-details">
                    <h3>{item.title}</h3>
                    <p className="item-category">
                      Category: {categories.find(c => c.id === item.category)?.name || item.category}
                    </p>
                    <p className="item-date">
                      Uploaded: {new Date(item.uploadedAt).toLocaleDateString()}
                    </p>
                    <p className="item-id">
                      Public ID: {item.imagePublicId || 'N/A'}
                    </p>
                  </div>
                  <div className="item-actions">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;

