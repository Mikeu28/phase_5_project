import React from 'react'
import ClassCard from './ClassCard.js'

function CardContainer ( { data } ) {
    return (
        <ul>{ data.map( (names) => <ClassCard name = { names.name } key = { names.id }/> ) }</ul>
    )
}

export default CardContainer