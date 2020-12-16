/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, jsx } from '@emotion/react'
import PropTypes from 'prop-types'

import { CommonButton, Input } from '../../atoms'

const Form = ({  buttonColor, buttonLabel, buttonVariant, elevation, inputVariant }) => {
    return (
        <div css={formDiv}>
            <Input variant={inputVariant} />
            <CommonButton
                color={buttonColor}
                elevation={elevation}  
                label={buttonLabel}
                variant={buttonVariant}
            />
        </div>
    )
}

Form.propTypes = {
    // Button props
    buttonColor: PropTypes.string,
    buttonLabel: PropTypes.string.isRequired,
    buttonVariant: PropTypes.string,
    elevation: PropTypes.bool,
    // Input props
    inputVariant: PropTypes.string.isRequired
}

export default Form

const formDiv = css`
    display: flex;
    flex-direction: row;
    * {
        margin: 0 1rem;
    }
`