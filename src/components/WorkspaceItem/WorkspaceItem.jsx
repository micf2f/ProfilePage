import React from "react";

import './WorkspaceItem.css';


export default function WorkspaceItem({ header, innerText }) {

    return (

        <div className="workspace__item">

            <h3 className="item__title"> {header}: </h3>

            <div className="item__card">
                
                <p> {innerText} </p>

                <button className="add__btn"> ┿ </button>

            </div>

        </div>

    )

}