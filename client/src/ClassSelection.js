import React from 'react';

function ClassSelection ( { name, handleLevel, id } ) {

    return (
        <button id = { id } name = { name } onClick = { handleLevel }>{name}</button>
    )
}

export default ClassSelection;