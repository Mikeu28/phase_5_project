import React from 'react';

function ClassCard ( { name, handleLevel } ) {

    return (
        <div>
            <button name = { name } onClick = { handleLevel }>{name}</button>
        </div>
    )
}

export default ClassCard;