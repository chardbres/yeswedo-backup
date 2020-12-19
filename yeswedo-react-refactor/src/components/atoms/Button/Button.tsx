import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

export const CommonButton = ({ color, disabled, elevation, label, type, variant }) => {
    // Set elevation in props to true to remove shadow from button
    if (elevation === false) {
        return <Button color={color} disabled={disabled} type={type} variant={variant} disableElevation>{label}</Button>
    }
    return <Button color={color} disabled={disabled} type={type} variant={variant} >{label}</Button>

}

CommonButton.propTypes = {
    color: PropTypes.oneOf([ 'primary', 'secondary ']),
    disabled: PropTypes.bool,
    elevation: PropTypes.bool,
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf([ 'contained', 'outline' ]),
    type: PropTypes.string,
    handleClick: PropTypes.func
}
