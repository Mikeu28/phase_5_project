import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ClassCard from './ClassCard.js'

function CardContainer ( { data } ) {
    
    const [ isOpen, setIsOpen ] = useState( false );

    function handleClick () {
        setIsOpen( !isOpen )
    }

    return (
        <div>
            <button onClick = { handleClick }>+</button>
            <ReactModal
                isOpen = { isOpen }
                onRequestClose = { () => setIsOpen( false ) }
            >
                { data.map( (names) => <ClassCard name = { names.name } key = { names.id } /> ) }
            </ReactModal>
        </div>
        // <button onClick = { data.map( (names) => <ClassCard name = { names.name } key = { names.id } /> ) } >+</button>
        // <ul>{ data.map( (names) => <ClassCard name = { names.name } key = { names.id }/> ) }</ul>
    )
}

export default CardContainer