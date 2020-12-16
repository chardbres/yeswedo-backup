import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const Input = ({ variant }) => {
    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <TextField variant={variant} value={text} onChange={handleChange}/>
    )
}

Input.propTypes ={
    variant: PropTypes.string.isRequired
}

export default Input