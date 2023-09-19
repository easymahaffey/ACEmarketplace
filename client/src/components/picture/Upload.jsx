import React, { useState } from 'react';
// import axios from 'axios';
import { uploadPhoto } from '../../redux/actions/appActions';
import API from '../../utils/API';

function FileUpload() {
  const [file, setFile] = useState(null);
  
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    API.uploadPhoto(formData)
    
    // try {
    //   const res = await axios.post('http://localhost:5000/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
      
    //   console.log('File uploaded:', res.data);
    // } catch (err) {
    //   console.error('Error uploading file:', err);
    // }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={ handleChange } />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
    return {
        uploadPhoto: ()=>dispatch(uploadPhoto()),
    }
}

const mapStateToProps = (state) =>{
    return {
        authState: state.auth
    }
}

export default FileUpload;