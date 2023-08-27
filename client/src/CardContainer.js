import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ClassCard from './ClassCard.js'

function CardContainer ( { data } ) {
    const [ level, setLevel ] = useState( 0 );
    const [ isOpen, setIsOpen ] = useState( false );
    const [ paladinLevel, setPaladinLevel ] = useState( 0 );
    const [ wizardLevel, setWizardLevel ] = useState( 0 );
    const [ fighterLevel, setFighterLevel ] = useState( 0 )

    function handleWizard () {
        if (level < 12 ) {
            setLevel( level + 1 )
            setWizardLevel( wizardLevel + 1 )
        }
    }

    function handlePaladin () {
        if (level < 12 ) {
            setLevel( level + 1 )
            setPaladinLevel( paladinLevel + 1 )
        }
    }

    function handleFighter () {
        if (level < 12 ) {
            setLevel( level + 1 )
            setFighterLevel( fighterLevel + 1 )
        }
    }

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
            setWizardLevel( wizardLevel + 1 )
        } else if ( e.target.name === "Fighter" && level < 12 ) {
            setIsOpen( false )
            setLevel( level + 1 )
            setFighterLevel( fighterLevel + 1)
        } else {
            setIsOpen( false )
        }
    };

    const wizardStyle = {
        display: wizardLevel > 0 ? 'block' : 'none'
    };

    const paladinStyle = {
        display: paladinLevel > 0 ? 'block' : 'none'
    };

    const fighterStyle = {
        display: fighterLevel > 0 ? 'block' : 'none'
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
            <p>{ paladinLevel > 0 ? `Paladin Level: ${ paladinLevel }` : null } <button style={ paladinStyle } onClick = { handlePaladin }>Paladin Level +</button> </p>
            <p>{ fighterLevel > 0 ? `Fighter Level: ${ fighterLevel }` : null } <button style={ fighterStyle } onClick = { handleFighter }>Fighter Level +</button> </p>
            <p>{ wizardLevel > 0 ? `Wizard Level: ${ wizardLevel }` : null } <button style={ wizardStyle } onClick = { handleWizard }>Wizard Level +</button> </p>
        </div>
    )
};

export default CardContainer