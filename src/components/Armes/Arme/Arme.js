import React from 'react';

const armes = (props) => (
    <div onClick={props.changeArmePerso}>
        <div>
            <img
                src={props.imgArme} 
                alt={props.children}
                style={{
                    cursor: 'pointer',
                    opacity: props.etatArme? 1 : 0.5
                }}
             />
        </div>
        <div>
            {props.children}
        </div>
    </div>
);

export default armes;