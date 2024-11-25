import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setAvatar, removeAvatar } from '../../../store/features/profile/slice';

import './ImgForm.css';

import noAvatar from '../../../images/no_avatar.png';


export default function ImgForm() {

    const dispatch = useDispatch();
    const avatar = useSelector((state) => state.profile.avatar);
    const [preview, setPreview] = useState(avatar);
    const [error, setError] = useState('');

    
    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (file) {

            const validFormats = ['image/jpeg', 'image/png', 'image/jpg'];
            const maxSize = 5 * 1024 * 1024;

            if (!validFormats.includes(file.type)) {
                setError('Supported formats: .jpg, .jpeg, .png');
                return;
            }

            if (file.size > maxSize) {
                setError('The file size must not exceed 5 MB');
                return;
            }

            setError('');


            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
                dispatch(setAvatar(reader.result));
            };
            reader.readAsDataURL(file);

        }

    };

    const handleRemoveAvatar = () => {
        setPreview(null);
        dispatch(removeAvatar());
    };


    return (

        <div className="avatar__form">

            <label className="avatar__upload">

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                />

                <div className="avatar__icon">
                    {!preview ? (
                        <img
                            src={noAvatar}
                            alt="No avatar available, click to upload"
                            className="avatar__image"
                        />

                    ) : (

                        <img
                            src={preview}
                            alt="User avatar"
                            className="avatar__image"
                        />

                    )}

                </div>

            </label>

            {error && <p className="error"> {error} </p>}

            {preview && (
                <button
                    onClick={handleRemoveAvatar}
                    className="avatar__remove"
                    aria-label="Remove avatar"
                >
                    ×
                </button>
            )}

        </div>

    )
    
}
