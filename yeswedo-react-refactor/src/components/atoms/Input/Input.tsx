import React, { useState } from 'react'
import { AccountCircle, VpnKey } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

export const BasicInput = ({ variant }) => {
    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    return (
        <TextField variant={variant} value={text} onChange={handleChange}/>
    )
}

export const IconInput = ({ label, name, placeholder, type, value, onChange  }) => {
    // const [text, setText] = useState('')

    const iconType = type => {
        if (type === 'username') {
            return ({
                startAdornment: (
                    <InputAdornment position='start'>
                        <AccountCircle />
                    </InputAdornment>
                )
            })
        } else if (type === 'password') {
            return ({
                startAdornment: (
                    <InputAdornment position='start'>
                        <VpnKey />
                    </InputAdornment>
                )
            })
        }
    }

    return (
        <TextField
            label={label}
            name={name} 
            value={value}
            variant='outlined' 
            onChange={onChange}
            InputProps={iconType(type)}
            placeholder={placeholder}
        />
    )
}

BasicInput.propTypes = {
    variant: PropTypes.string.isRequired
}

IconInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([ 'username', 'password' ]).isRequired,
    value: PropTypes.string
}

