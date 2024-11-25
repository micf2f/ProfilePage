import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../store/features/profile/slice";

import './UserDataForm.css';


export default function UserDataForm({ errors }) {

    const dispatch = useDispatch();
    const profileData = useSelector((state) => state.profile.profileData);

    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        dispatch(updateProfile({ ...profileData, [id]: value }));
    };


    return (

        <div className="text__inputs">
            <p className='info__p'>*required fields</p>
            <input type="text" id="name" placeholder="Name*" value={profileData.name} onChange={handleInputChange} />
            <input type="text" id="lastname" placeholder="Lastname*" value={profileData.lastname} onChange={handleInputChange} />
            <input type="text" id="job" placeholder="Job Title" value={profileData.job} onChange={handleInputChange} />
            <input type="tel" id="phone" placeholder="Phone*" value={profileData.phone} onChange={handleInputChange} />
            <input type="email" id="email" placeholder="Email*" value={profileData.email} onChange={handleInputChange} />
            <input type="text" id="address" placeholder="Address" value={profileData.address} onChange={handleInputChange} />
            <input type="text" id="pitch" placeholder="Pitch" value={profileData.pitch} onChange={handleInputChange} />
           
            {errors?.name && (
                <ul className="error">
                    {errors.name.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
            )}

        </div>
    )

}
