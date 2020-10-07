import React from 'react';
import {useFetch} from '../../hooks/useFetch';
import './style.css'

export const MultipleCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/2`)
    console.log(state);

    return (
        <div>
            <h1>Custom Hooks!!</h1>
            <hr/>
        </div>
    )
}