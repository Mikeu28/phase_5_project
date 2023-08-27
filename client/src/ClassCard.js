import React from 'react';

function ClassCard ( { name, handleLevel } ) {

    return (
        <button name = { name } onClick = { handleLevel }>{name}</button>
    )
}

export default ClassCard;