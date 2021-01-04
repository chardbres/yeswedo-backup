/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

import { FullButton, BasicInput } from '../../atoms'

export const Form = ({  buttonColor, buttonLabel, buttonVariant, elevation, inputVariant }) => {
    return (
        <div css={formDiv}>
            <BasicInput variant={inputVariant} />
            <FullButton
                className=''
                color={buttonColor}
                disabled={false}
                elevation={elevation}  
                label={buttonLabel}
                type=''
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

const formDiv = css`
    display: flex;
    flex-direction: row;
    * {
        margin: 0 1rem;
    }
`