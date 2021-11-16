import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
 

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const allowedTypes = ['image/jpeg', 'image/png'];

    const changeHandler = (e) => {
        let selected = e.target.files[0]

        console.log(selected);

        if (selected && allowedTypes.includes(selected.type)){
            setFile(selected);
            setError(null);
        }else {
            setFile(null);
            setError('Select a valid image file');
        }
    }
    return(
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file &&<div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
} 

export default UploadForm;