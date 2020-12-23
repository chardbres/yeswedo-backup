import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const styles = makeStyles({
    primary: {
        background: '#2c3e50',
        color: '#fff'
    },
    secondary: {
        background: '#ffca18',
        color: '#000'
    },
    outlinedPrimary: {
        borderColor: '#2c3e50',
        color: '#2c3e50'
    },
    outlinedSecondary: {
        borderColor: '#ffca18',
        color: '#ffca18'
    },
    textPrimary: {
        color: '#2c3e50'
    },
    textSecondary: {
        color: '#ffca18'
    }
})

export const FullButton = ({ className, color, disabled, elevation, label, type }) => {
    const classes = styles()
    // Set elevation in props to true to remove shadow from button
    if (elevation === false) {
        return <Button classes={{ 
                containedPrimary: classes.primary, 
                containedSecondary: classes.secondary 
            }} color={color} disabled={disabled} type={type} variant='contained' disableElevation >{label}</Button>
    }
    return <Button classes={{ 
        containedPrimary: classes.primary, 
        containedSecondary: classes.secondary 
    }} color={color} disabled={disabled} type={type} variant='contained' >{label}</Button>
}

export const OutlinedButton = ({ className, color, disabled, label, type }) => {
    const classes = styles()

    return <Button classes={{ 
        outlinedPrimary: classes.outlinedPrimary, 
        outlinedSecondary: classes.outlinedSecondary 
    }} color={color} disabled={disabled} type={type} variant='outlined' >{label}</Button>
}

export const TextButton = ({ className, color, disabled, label, type }) => {
    const classes = styles()

    return <Button classes={{ 
        textPrimary: classes.textPrimary, 
        textSecondary: classes.textSecondary 
    }} color={color} disabled={disabled} type={type} >{label}</Button>
}

FullButton.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'primary', 'secondary ']),
    disabled: PropTypes.bool,
    elevation: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
}

OutlinedButton.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'primary', 'secondary ']),
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
}

TextButton.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'primary', 'secondary ']),
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.string
}