import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { resetProfile, updateProfileOption, resetProfileOption } from "../../store/features/profile/slice";

import ImgForm from "./ImgForm/ImgForm";
import UserDataForm from "./UserDataForm/UserDataForm";
import ProfileVisibilityForm from "./ProfileVisibilityForm/ProfileVisibilityForm";
import InterestForm from "./InterestForm/InterestForm";
import LinksForm from "./LinksForm/LinksForm";

import {
    validateName,
    validateLastname,
    validateJob,
    validatePhoneNumber,
    validateEmail,
    validateAddress,
    validatePitch
} from '../../utils/validation';

import './Form.css';


export default function Form() {

    const dispatch = useDispatch();

    const profileData = useSelector((state) => state.profile.profileData);
    const profileOption = useSelector((state) => state.profile.profileOption);

    const [selectedOption, setSelectedOption] = useState(profileOption);
    const [errors, setErrors] = useState({});


    const handleSave = (e) => {

        e.preventDefault();

        const nameErrors = validateName(profileData.name);
        const lastnameErrors = validateLastname(profileData.lastname);
        const jobErrors = validateJob(profileData.job);
        const phoneErrors = validatePhoneNumber(profileData.phone);
        const emailErrors = validateEmail(profileData.email);
        const addressErrors = validateAddress(profileData.address);
        const pitchErrors = validatePitch(profileData.pitch);

        if (nameErrors.length > 0) {
            setErrors({ name: nameErrors });
            return;
        }
        if (lastnameErrors.length > 0) {
            setErrors({ name: lastnameErrors });
            return;
        }
        if (jobErrors.length > 0) {
            setErrors({ name: jobErrors });
            return;
        }
        if (phoneErrors.length > 0) {
            setErrors({ name: phoneErrors });
            return;
        }
        if (emailErrors.length > 0) {
            setErrors({ name: emailErrors });
            return;
        }
        if (addressErrors.length > 0) {
            setErrors({ name: addressErrors });
            return;
        }
        if (pitchErrors.length > 0) {
            setErrors({ name: pitchErrors });
            return;
        }

        setErrors({});


        const profileDataToSave = { ...profileData };
        localStorage.setItem("profileData", JSON.stringify(profileDataToSave));

        dispatch(updateProfileOption(selectedOption));
        localStorage.setItem("profileOption", selectedOption);

    };

    const handleCancel = (e) => {

        e.preventDefault();

        setSelectedOption(profileOption);
        dispatch(resetProfile());
        dispatch(resetProfileOption());

    };


    return (

        <div className="form">

            <form>

                <ImgForm />
                <UserDataForm errors={errors} />
                <ProfileVisibilityForm
                    selectedOption={selectedOption}
                    handleOptionChange={(e) => setSelectedOption(e.target.value)}
                />
                <InterestForm />
                <LinksForm />

                <div className="form__actions">
                    <button className="form__btn" type="submit" onClick={handleSave} > Save changes </button>
                    <button className="form__btn" onClick={handleCancel} > Cancel </button>
                </div>

            </form>

        </div>

    )

}