import React from 'react'
import Button from 'react-bootstrap/Button'

export const ButtonSearch = ({ name, variant, onClick }) => {
    return (
        <>
            <Button
                variant={variant}
                className="mb-3"
                onClick={onClick}
            >
                {name}
            </Button>
            {' '}
        </>
    )
}
