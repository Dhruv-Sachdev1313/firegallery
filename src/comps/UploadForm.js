import React, { useState, useEffect } from "react";
 

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
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file &&<div>{file.name}</div>}
            </div>
        </form>
    )
} 

export default UploadForm;