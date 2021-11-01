import React from 'react';

const titleH1 = (props) => (
    <h1 className="fw-bold text-center bg-info mt-2 p-3 rounded">
        {props.children}
    </h1>
);

export default titleH1;