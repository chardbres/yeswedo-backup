// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/** @jsxImportSource @emotion/react */
import React from 'react'
// React-Router
import { Link } from 'react-router-dom'
// Material-UI component(s)
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
// @Emotion
import { css } from '@emotion/react'
// Logos and icons
import Logo from '../../../assets/images/yeswedo_logo.png'
import API from '@material-ui/icons/AccountTree'
import Customers from '@material-ui/icons/RecentActors'
import Dashboard from '@material-ui/icons/Dashboard'
import Employees from '@material-ui/icons/People'
import Jobs from '@material-ui/icons/Build'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const styles = makeStyles({
    drawer: {
        backgroundColor: '#2c3e50',
        border: 0,
        color: '#fff',
        width: '12vw'
    },
    listSubheader: {
        color: '#ffca18',
        fontFamily: 'Nunito',
        fontWeight: 'bold'
    },
    listIcon: {
        color: '#fff'
    },
    listItem: {
        alignItems: 'flex-start',
        color: '#fff',
        fontFamily: 'Nunito',
    }
})


export const Menu = () => {
    const classes = styles()

    return (
        <Drawer
            classes={{ paper: classes.drawer }}
            anchor='left'
            variant='permanent'
        >
            <div css={headingCSS}>
                <img src={Logo} alt='YesWeDo' />
                <h4>YESWEDO</h4>
            </div>
            <Divider 
                style={{ 'backgroundColor': 'lightgray'}} 
                variant='middle' 
            />
            <Link to='/home' css={linkCSS} >
                <List>
                    <ListItem button dense={true} >
                        <ListItemIcon classes={{ root: classes.listIcon }} ><Dashboard /></ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItem }} primary='Dashboard' />
                    </ListItem>
                </List>
            </Link>
            <Divider 
                style={{ 'backgroundColor': 'lightgray'}} 
                variant='middle' 
            />
            <List 
                subheader={<ListSubheader 
                    classes={{ root: classes.listSubheader }} > MENU </ListSubheader>}
            >
                <Link to='/customers' css={linkCSS} >
                    <ListItem button dense={true} >
                        <ListItemIcon classes={{ root: classes.listIcon }}><Customers /></ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItem }} primary='Customers' />
                    </ListItem>
                </Link>
                <Link to='/jobs' css={linkCSS} >
                    <ListItem button dense={true} >
                        <ListItemIcon classes={{ root: classes.listIcon }}><Jobs /></ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItem }} primary='Jobs' />
                    </ListItem>
                </Link>
                <Link to='/employees' css={linkCSS} >
                    <ListItem button dense={true} >
                        <ListItemIcon classes={{ root: classes.listIcon }}><Employees /></ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItem }} primary='Employees' />
                    </ListItem>
                </Link>
            </List>
            <Divider style={{ 'backgroundColor': 'lightgray'}} variant='middle' />
            <List subheader={<ListSubheader 
                classes={{ root: classes.listSubheader }}> EXTENSIONS </ListSubheader>}>
                <ListItem button dense={true} >
                    <ListItemIcon classes={{ root: classes.listIcon }} ><API /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItem }} primary='API' />
                </ListItem>
            </List>
        </Drawer>
    )
}

const headingCSS = css`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 7vh;
    justify-content: center;

    img {
        width: 33px;
        height: 33px;
    }

    h4 {
        font-family: Nunito;
        margin-left: 1rem;
    }
`

const linkCSS = css`
    text-decoration: none;    
`
