import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addInterest, removeInterest } from '../../../store/features/profile/slice';

import { validateInterest } from '../../../utils/validation';

import './InterestForm.css';


export default function InterestForm() {

    const dispatch = useDispatch();
    const interests = useSelector((state) => state.profile.interests);
    const [newInterest, setNewInterest] = useState('');
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        if (interests.length) {
            localStorage.setItem('interests', JSON.stringify(interests));
        }
    }, [interests]);


    const handleAddInterest = (e) => {
        e.preventDefault();

        const errors = validateInterest(newInterest, interests.length);

        if (errors.length > 0) {
            setError(errors.join(', '));
            return;
        }

        setError('');


        if (newInterest.trim()) {
            dispatch(addInterest(newInterest.trim()));
            setNewInterest('');
            setIsInputVisible(false);
        }
    };

    const handleRemoveInterest = (e, interestToRemove) => {
        e.preventDefault();
        dispatch(removeInterest(interestToRemove));
    };

    
    const handleAdd = (e) => {
        e.preventDefault();
        setIsInputVisible(true);
    };


    return (

        <div className="interests">

            <p className='form__p'> The scopes of your interest: </p>

            {interests.map((interest, index) => (
                <span className="interest" key={index}>
                    {interest}
                    <button className="remove__btn" onClick={(e) => handleRemoveInterest(e, interest)} > ✖ </button>
                </span>
            ))}

            <button className="add__interest__btn" onClick={handleAdd} > ┿ </button>

            {isInputVisible && (

                <div className='interest__input'>

                    <input
                        type="text"
                        className="input__interest"
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        placeholder="New interest"
                    />

                    <button className='done__btn' onClick={handleAddInterest} > ✔ </button>

                </div>
            )}

            {error && <p className="error"> {error} </p>}

        </div>

    )

}