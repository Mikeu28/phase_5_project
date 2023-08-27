import React, { useState } from 'react';
import ReactModal from 'react-modal';

function ClassCard ( { name } ) {

    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <div>
            <button onClick = { () => setIsOpen( true ) }>Name: {name} </button>
            <ReactModal
                isOpen = { isOpen }
                contentLabel = "Test"
                onRequestClose = { () => setIsOpen( false ) }
                >
                    { name }
                </ReactModal>
        </div>
    ) ;
}

export default ClassCard;