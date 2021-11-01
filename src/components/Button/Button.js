import React from 'react'

const button = (props) => {
    const cssBtn = `btn ${props.clrBtn} fw-bold w-100`;
    return(
        <button className={cssBtn} onClick={props.clic}>
            {props.children}
        </button>
    )
};

export default button;