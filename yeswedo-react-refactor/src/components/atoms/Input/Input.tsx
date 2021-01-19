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

export const IconInput = ({ className, label, name, placeholder, size, tag, type, value, onChange  }) => {

    const iconType = type => {
        if (tag === 'username') {
            return ({
                startAdornment: (
                    <InputAdornment position='start'>
                        <AccountCircle />
                    </InputAdornment>
                )
            })
        } else if (tag === 'password') {
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
            type={type}
            size={size}
        />
    )
}

BasicInput.propTypes = {
    variant: PropTypes.string.isRequired
}

IconInput.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    tag: PropTypes.oneOf([ 'username', 'password' ]).isRequired,
    type: PropTypes.string,
    value: PropTypes.string
}

