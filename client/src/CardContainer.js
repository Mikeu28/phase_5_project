import React, { useState } from 'react';
import ReactModal from 'react-modal';
import ClassSelection from './ClassSelection.js'
import ClassCard from './ClassCard'

function CardContainer ( { data } ) {
    const [ isOpen, setIsOpen ] = useState( false );
    const [ classLevel, setClassLevel ] = useState( [] );


    function handleClick () {
        setIsOpen( !isOpen )
        console.log(classLevel)
    };

    function handleLevel ( e ) {
        setIsOpen( false )
        setClassLevel( [
            { className : e.target.name, level : 1, classId : e.target.id },
            ...classLevel
        ] );
    }

    return (
        <div>
            <button onClick = { handleClick }>+</button>
            <ReactModal
                isOpen = { isOpen }
                onRequestClose = { () => setIsOpen( false ) }
            >
                
                { data.map( ( names ) => {
                    let alreadyExists = false
                    for (const element of classLevel) {
                        if ( element['classId'] == names.id ) {
                            alreadyExists = true
                        }
                    } 
                    if ( alreadyExists === false ) {
                        return <ClassSelection id = { names.id } handleLevel = { handleLevel } name = { names.name } key = { names.id } /> 
                    }
                    return null
                }) 
                }
                


            </ReactModal>
            <p>Total Level: { classLevel.reduce( ( element, currentValue ) => element + currentValue.level, 0 ) }</p>
            <div>{ classLevel.map( ( element ) => <p>{ element.className } Level: { element.level }</p>  )}</div>
        </div>
    )
};

export default CardContainer