/** @jsxImportSource @emotion/react */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Divider from '@material-ui/core/Divider'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import { AccountMenu } from '../../molecules'

import Message from '@material-ui/icons/ChatBubble'
import Notification from '@material-ui/icons/Notifications'

const styles = makeStyles({
    appBar: {
        background: '#fff',
        color: 'gray',
        paddingLeft: '12vw'
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        flexGrow: 1
    }
})

export const Header = ({ title, user }) => {
    const classes = styles()

    return (
        <AppBar classes={{ root: classes.appBar }} >
            <Toolbar>
                <Typography classes={{ root: classes.title }} variant='h4' >
                    {title}
                </Typography>
                <div css={badgeCSS} >
                    <Badge color='secondary' badgeContent={0} showZero >
                        <Message />
                    </Badge>
                    <Badge color='secondary' badgeContent={0} showZero >
                        <Notification />
                    </Badge>
                </div>
                <Divider orientation='vertical' variant='middle' flexItem />
                <div css={avatarCSS}>
                    <p>{user}</p>
                    <Avatar />
                    <AccountMenu />
                </div>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.string
}

const avatarCSS = css`
    align-items: center;
    display: flex;
    flex-direction: row;

    p {
        font-family: Nunito;
        margin-right: .5rem;
    }
`

const badgeCSS = css`
    * {
        margin-left: .5rem;
    }
`
