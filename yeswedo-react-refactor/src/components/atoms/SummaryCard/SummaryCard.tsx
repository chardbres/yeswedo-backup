/** @jsxImportSource @emotion/react */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

// Icon inputs
import Receipt from '@material-ui/icons/Receipt'
import Dollar from '@material-ui/icons/MonetizationOn'
import Hours from '@material-ui/icons/Timelapse'
import Customers from '@material-ui/icons/Group'

const styles = makeStyles({
    icon: {
        color: '#5a5c69'
    }
})

export const SummaryCard = ({ color, title, type, value }) => {
    const classes = styles()

    const setIcon = type => {
        if (type === 'Receipt' ) {
            return <Receipt classes={{ root: classes.icon }} fontSize='large' />
        } else if (type === 'Dollar' ) {
            return <Dollar classes={{ root: classes.icon }} fontSize='large' />
        } else if (type === 'Hours' ) {
            return <Hours classes={{ root: classes.icon }} fontSize='large' />
        } else if (type === 'Customers' ) {
            return <Customers classes={{ root: classes.icon }} fontSize='large' />
        }
    }

    const setValue = (type, value) => {
        return type === 'Dollar' ? <h1>$ {value}</h1> : <h1>{value}</h1>
    }

    return (
        <Card>
            <CardContent style={{ borderLeft: `4px solid ${color}` }}>
                <Typography 
                    style={{ 
                    color: `${color}`, 
                    fontFamily: 'Nunito',
                    fontWeight: 'bold' }} 
                    variant='subtitle2'
                >
                        {title}
                </Typography>
                <div css={contentCSS}>
                    {setValue(type, value)}
                    {setIcon(type)}
                </div>
            </CardContent>
        </Card>
    )
}

SummaryCard.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.number
}

const contentCSS = css`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 8vh;
    font-family: Nunito;
    justify-content: space-between;

    h1 {
        color: #5a5c69;
        font-family: Nunito;
        margin: 0;
    }
`
