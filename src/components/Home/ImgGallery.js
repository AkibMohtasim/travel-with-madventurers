import React, { useEffect, useState } from 'react';
import { ImageList, ImageListItem } from '@mui/material';

const ImgGallery = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/images`)
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])

  return (
    <div style={{ width: '70vw', margin: '7% auto'}}>
      <h2>Have a look at our image gallery</h2>
      <div style={{ height: '80vh', overflowY: 'scroll'}}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images?.map((item) => (
            <ImageListItem key={item._id}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default ImgGallery;