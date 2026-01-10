import { Cloudinary } from '@cloudinary/url-gen';
import { fill, fit, scale } from '@cloudinary/url-gen/actions/resize';
import { quality } from '@cloudinary/url-gen/actions/delivery';
import { format } from '@cloudinary/url-gen/actions/delivery';

// Initialize Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'your-cloud-name'
  }
});

/**
 * Generate a Cloudinary image URL
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {Object} options - Transformation options
 * @param {number} options.width - Desired width (optional)
 * @param {number} options.height - Desired height (optional)
 * @param {string} options.crop - Crop mode (fill, fit, scale, etc.) - default: 'fill'
 * @param {number} options.quality - Image quality (auto or 1-100) - default: 'auto'
 * @param {string} options.format - Image format (auto, jpg, png, webp, etc.) - default: 'auto'
 * @returns {string} The Cloudinary image URL
 */
export const getCloudinaryImage = (publicId, options = {}) => {
  if (!publicId) return '';

  const {
    width,
    height,
    crop = 'fill',
    quality: qualityOption = 'auto',
    format: formatOption = 'auto'
  } = options;

  let image = cld.image(publicId);

  // Apply resize if width or height is specified
  if (width || height) {
    if (crop === 'fill') {
      if (width && height) {
        image = image.resize(fill().width(width).height(height));
      } else if (width) {
        image = image.resize(fill().width(width));
      } else if (height) {
        image = image.resize(fill().height(height));
      }
    } else if (crop === 'fit') {
      if (width && height) {
        image = image.resize(fit().width(width).height(height));
      } else if (width) {
        image = image.resize(fit().width(width));
      } else if (height) {
        image = image.resize(fit().height(height));
      }
    } else if (crop === 'scale') {
      if (width && height) {
        image = image.resize(scale().width(width).height(height));
      } else if (width) {
        image = image.resize(scale().width(width));
      } else if (height) {
        image = image.resize(scale().height(height));
      }
    }
  }

  // Apply format
  if (formatOption && formatOption !== 'auto') {
    image = image.format(formatOption);
  }

  // Apply quality
  if (qualityOption && qualityOption !== 'auto' && typeof qualityOption === 'number') {
    image = image.delivery(quality(qualityOption));
  }

  // Build the URL and manually add f_auto and q_auto if needed
  let url = image.toURL();
  
  // Add auto transformations to the URL if specified
  // Cloudinary URL pattern: https://res.cloudinary.com/{cloud}/image/upload/{transforms}/{publicId}
  if ((formatOption === 'auto' || qualityOption === 'auto') && url.includes('/upload/')) {
    const uploadIndex = url.indexOf('/upload/');
    const beforeUpload = url.substring(0, uploadIndex + 8); // Include '/upload/'
    const afterUpload = url.substring(uploadIndex + 8);
    
    // Extract existing transforms and public ID
    const parts = afterUpload.split('/');
    const publicIdWithExt = parts[parts.length - 1];
    const existingTransforms = parts.slice(0, -1).filter(p => p);
    
    // Build new transform array
    const transforms = [...existingTransforms];
    if (qualityOption === 'auto' && !transforms.includes('q_auto')) {
      transforms.push('q_auto');
    }
    if (formatOption === 'auto' && !transforms.includes('f_auto')) {
      transforms.push('f_auto');
    }
    
    // Reconstruct URL
    if (transforms.length > 0) {
      url = `${beforeUpload}${transforms.join('/')}/${publicIdWithExt}`;
    } else {
      url = `${beforeUpload}${publicIdWithExt}`;
    }
  }
  
  return url;
};

/**
 * Get optimized Cloudinary image URL for responsive images
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {number} width - Desired width
 * @returns {string} The optimized Cloudinary image URL
 */
export const getResponsiveImage = (publicId, width) => {
  return getCloudinaryImage(publicId, {
    width,
    crop: 'scale',
    quality: 'auto',
    format: 'auto'
  });
};

/**
 * Get thumbnail image URL
 * @param {string} publicId - The public ID of the image in Cloudinary
 * @param {number} size - Size for width and height (square thumbnail)
 * @returns {string} The thumbnail Cloudinary image URL
 */
export const getThumbnail = (publicId, size = 300) => {
  return getCloudinaryImage(publicId, {
    width: size,
    height: size,
    crop: 'fill',
    quality: 80,
    format: 'auto'
  });
};

/**
 * Check if Cloudinary is properly configured
 * @returns {boolean} True if Cloudinary cloud name is set
 */
export const isCloudinaryConfigured = () => {
  return !!process.env.REACT_APP_CLOUDINARY_CLOUD_NAME && 
         process.env.REACT_APP_CLOUDINARY_CLOUD_NAME !== 'your-cloud-name';
};

export default cld;
