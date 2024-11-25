import React from 'react';

import './ProfileVisibilityForm.css';


export default function ProfileVisibilityForm({ selectedOption, handleOptionChange }) {

    return (

        <div className="profile__visibility">

            <p> Show your profile in Launchpad? </p>

            <label>
                <input
                    type="radio"
                    name="option"
                    value="public"
                    checked={selectedOption === "public"}
                    onChange={handleOptionChange}
                />
                Public
            </label>

            <label>
                <input
                    type="radio"
                    name="option"
                    value="private"
                    checked={selectedOption === "private"}
                    onChange={handleOptionChange}
                />
                Private
            </label>

        </div>
    )

}