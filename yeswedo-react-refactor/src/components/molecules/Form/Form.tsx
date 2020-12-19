/** @jsxImportSource @emotion/react */
import React from 'react'
import { css, jsx } from '@emotion/react'
import PropTypes from 'prop-types'

import { CommonButton, BasicInput } from '../../atoms'

const Form = ({  buttonColor, buttonLabel, buttonVariant, elevation, inputVariant }) => {
    return (
        <div css={formDiv}>
            <BasicInput variant={inputVariant} />
            <CommonButton
                color={buttonColor}
                disabled={false}
                elevation={elevation}  
                label={buttonLabel}
                type=''
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