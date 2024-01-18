import React, { input } from 'react'
export const InputSearch = ({ name, onChange }) => {
    return (
        <>
            <label>{name}</label>{'  '}
            <input name={name.toLowerCase()} onChange={onChange}></input> <br /><br />
        </>
    )
}