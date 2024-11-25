import React from "react";

import WorkspaceItem from '../WorkspaceItem/WorkspaceItem';

import { workspaceItems } from "../../constants/profile";

import './Workspace.css';


export default function Workspace() {

    return (

        <div className="workspace">
            {workspaceItems.length ? <ul>
                {workspaceItems.map((item, index) => <li key={index}> 
                    <WorkspaceItem header={item.header} innerText={item.innerText} /> 
                </li> )}
            </ul> : null}
        </div>
    
    )
    
}