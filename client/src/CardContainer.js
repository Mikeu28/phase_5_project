import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ClassCard from './ClassCard.js'

function CardContainer ( { data } ) {
    const [ level, setLevel ] = useState( 0 );
    const [ isOpen, setIsOpen ] = useState( false );
    const [ paladinLevel, setPaladinLevel ] = useState( 0 );



    function handleClick () {
        setIsOpen( !isOpen )
    };

    function handleLevel ( e ) {
        if ( level < 12 ) {
            setLevel(level + 1);
            setIsOpen( false )
        // } else {
        //     setLevel( 0 )
        //     setIsOpen( false )
        }
        if ( e.target.name === "Paladin") {
            setPaladinLevel( paladinLevel + 1)
        }

        
    };

    return (
        <div>
            <button onClick = { handleClick }>+</button>
            <ReactModal
                isOpen = { isOpen }
                onRequestClose = { () => setIsOpen( false ) }
            >
                { data.map( (names) => <ClassCard handleLevel = { handleLevel } name = { names.name } key = { names.id } /> ) }
            </ReactModal>
            <p>Total Level: { level }</p>
            <p>{paladinLevel > 0 ? `Paladin Level: ${ paladinLevel }` : null }</p>
        </div>
        // <button onClick = { data.map( (names) => <ClassCard name = { names.name } key = { names.id } /> ) } >+</button>
        // <ul>{ data.map( (names) => <ClassCard name = { names.name } key = { names.id }/> ) }</ul>
    )
};

export default CardContainer