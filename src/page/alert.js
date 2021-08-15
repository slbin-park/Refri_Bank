import React from 'react';
import swal from '@sweetalert/with-react';
 

function swtalert(title, description) {
    return (
        swal(
        <div>
            <h1>{title}</h1>
            <p>
                {description}
            </p>
        </div>
    ))
}

export default swtalert;