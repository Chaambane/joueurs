import React from 'react';

const armes = (props) => (
    <div>
        <div>
            <img src={props.imgArme} alt={props.children} />
        </div>
        <div>
            {props.children}
        </div>
    </div>
);

export default armes;