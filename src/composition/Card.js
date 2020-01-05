import React from 'react'
import './Card.css';
import { tsPropertySignature } from '@babel/types';

function Card(props) {
    return (
        <div className="Card">
            <button
                type="button"
                onClick={() => props.handleDelete(props.key)}
            >
                delete
             </button>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default Card