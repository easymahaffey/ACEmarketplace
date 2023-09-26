import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { uploadPhoto } from '../../redux/actions/appActions';
import API from '../../utils/API';

function FileUpload() {
  const [file, setFile] = useState(null);
  
const dispatch = useDispatch()
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    console.log("Upload FILE ", file)
    API.uploadPhoto(file)
    dispatch(uploadPhoto)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
      <h2>Upload Picture</h2>
        <input type="file" onChange={ handleChange } />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload
