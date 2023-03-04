import React from 'react';
import {Link} from 'react-router-dom';
export function Home (){
    return (
        <>
        <h1>[Home]</h1> 
        <nav>
            <Link to = "item">item</Link>
            </nav>        
        </>
    )
}

export function Items(){
    return (
        <>
        <h1>[Item]</h1>
        </>
    )
}