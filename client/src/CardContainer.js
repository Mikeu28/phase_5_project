import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ClassCard from './ClassCard.js'

function CardContainer ( { data } ) {
    const [ level, setLevel ] = useState( 0 );
    const [ isOpen, setIsOpen ] = useState( false );
    const [ paladinLevel, setPaladinLevel ] = useState( 0 );
    const [ wizardLevel, setWizardlevel ] = useState( 0 );
    const [ figherLevel, setFighterLevel ] = useState( 0 )



    function handleClick () {
        setIsOpen( !isOpen )
    };

    function handleLevel ( e ) {
        if ( e.target.name === "Paladin" && level < 12 ) {
            setLevel( level + 1 )
            setPaladinLevel( paladinLevel + 1)
            setIsOpen( false )
        } else if ( e.target.name === "Wizard" && level < 12 ) {
            setIsOpen( false )
            setLevel( level + 1 )
            setWizardlevel( wizardLevel + 1 )
        } else if ( e.target.name === "Fighter" && level < 12 ) {
            setIsOpen( false )
            setLevel( level + 1 )
            setFighterLevel( figherLevel + 1)
        } else {
            setIsOpen( false )
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
            <p>{ paladinLevel > 0 ? `Paladin Level: ${ paladinLevel }` : null }</p>
            <p>{ figherLevel > 0 ? `Fighter Level: ${ figherLevel }` : null }</p>
            <p>{ wizardLevel > 0 ? `Wizard Level: ${ wizardLevel }` : null }</p>
        </div>
    )
};

export default CardContainer