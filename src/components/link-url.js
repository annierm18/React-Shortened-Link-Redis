import React from "react";

export default function(props) {
    
    const externalUrl =  props.value;

    return (
        <div className="link-list-container">
            <div className="link-list">
                <a target="_blank" href={externalUrl}>{props.url}</a>
            </div>
        </div>       
    );
}