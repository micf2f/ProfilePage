import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addLink, removeLink } from '../../../store/features/profile/slice';

import { validateLink } from '../../../utils/validation';

import './LinksForm.css';


export default function LinksForm() {

    const dispatch = useDispatch();
    const links = useSelector(state => state.profile.links);

    const [linkTitle, setLinkTitle] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState('');


    const handleAddClick = (e) => {
        e.preventDefault();
        setIsAdding(true);
    };

    const handleSaveClick = () => {

        const errors = validateLink(linkUrl);

        if (errors.length > 0) {
            setError(errors.join(', '));
            return;
        }

        if (linkTitle && linkUrl) {
            const newLink = { id: Date.now(), title: linkTitle, url: linkUrl };
            dispatch(addLink(newLink));
            setLinkTitle('');
            setLinkUrl('');
            setIsAdding(false);
            setError('');
        }
    };

    const handleDeleteClick = (id) => {
        dispatch(removeLink(id));
    };

    
    return (

        <div className="links">

            <div className='links__title'>
            
                <p className='form__p'>Your links:</p>
                <button className="add__link__btn" onClick={handleAddClick}> ┿ </button>

            </div>

            <div className="links__list">

                {links.map((link) => (
                    <div key={link.id} className="link__item">
                        <span>{link.title}: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></span>
                        <button className="remove__btn" onClick={() => handleDeleteClick(link.id)}> ✖ </button>
                    </div>
                ))}

            </div>

            {isAdding && (
                <div className="add__links__form">
                    <input 
                        className='input__links'
                        type="text" 
                        placeholder="Link Title" 
                        value={linkTitle} 
                        onChange={(e) => setLinkTitle(e.target.value)} 
                    />
                    <input 
                        className='input__links'
                        type="url" 
                        placeholder="Link URL" 
                        value={linkUrl} 
                        onChange={(e) => setLinkUrl(e.target.value)} 
                    />
                    <button className='done__btn' onClick={handleSaveClick}> ✔ </button>
                </div>
            )}

            {error && <p className="error"> {error} </p>}

        </div>

    )

}
