import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const CommonButton = ({ color, elevation, label, variant }) => {
    // Set elevation in props to true to remove shadow from button
    if (elevation === false) {
        return <Button color={color} variant={variant} disableElevation>{label}</Button>
    }
    return <Button color={color} variant={variant} >{label}</Button>

}

CommonButton.propTypes = {
    color: PropTypes.string,
    elevation: PropTypes.bool,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
    handleClick: PropTypes.func
}

export default CommonButton