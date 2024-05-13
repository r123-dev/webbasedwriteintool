import React, { useState } from 'react';
import { Card, Button } from 'antd';

const Block = ({ type, onDelete }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="block-card">
      {type === 'text' && <textarea className="text-area" placeholder="Enter text..." />}
      {type === 'image' && (
        <div>
          {imagePreview ? (
            <img src={imagePreview} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
          ) : (
            <input
              className="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          )}
        </div>
      )}
      <Button className="delete-btn" onClick={onDelete}>Delete</Button>
    </Card>
  );
}

export default Block;

