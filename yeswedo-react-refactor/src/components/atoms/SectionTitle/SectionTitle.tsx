/** @jsxImportSource @emotion/react */
import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

export const SectionTitle = ({ title }) => (
    <h1 css={titleCSS} >{title}</h1>
)

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
}

const titleCSS = css`
    color: #2c3e50;
    font-family: Nunito;
    margin: 1rem;
`