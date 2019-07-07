import React from "react";
// import Linkify from 'react-linkify';

export default function(props) {
    
    const externalUrl =  props.value;
    // <Linkify>{props.value}</Linkify>
    console.log(externalUrl);

    return (
        <div className="link-list-container">
            <div className="link-list">
                <a target="_blank" href={externalUrl}>{props.url}</a>
            </div>
        </div>       
    );
}