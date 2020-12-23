/** @jsxImportSource @emotion/react */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { css } from '@emotion/react'

// Logo and Material-UI icon inputs
import Logo from '../../../assets/images/yeswedo_logo.png'
import API from '@material-ui/icons/Storage'
import Customers from '@material-ui/icons/RecentActors'
import Employees from '@material-ui/icons/People'
import Jobs from '@material-ui/icons/Build'

const styles = makeStyles({
    drawer: {
        'background-color': '#2c3e50',
        color: '#fff',
        width: '12rem'
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
        fontFamily: 'Nunito'
    }
})

export const DrawerLeft = () => {
    const Menu = [ 
        'Customers', 
        'Jobs', 
        'Employees' 
    ]
    const MenuIcons = [ <Customers />, <Jobs />, <Employees /> ]
    const Extensions = [ 'API' ]
    const ExtensionsIcons = [ <API /> ]
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
            <Divider style={{ 'background': 'lightgray' }} variant='middle' />
            <List subheader={<ListSubheader classes={{ root: classes.listSubheader }} >MENU</ListSubheader>}>
                {Menu.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon classes={{ root: classes.listIcon }}>{MenuIcons[index]}</ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItem }} primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider style={{ 'background': 'lightgray' }} variant='middle' />
            <List subheader={<ListSubheader classes={{ root: classes.listSubheader }}>EXTENSIONS</ListSubheader>}>
                {Extensions.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon classes={{ root: classes.listIcon }} >{ExtensionsIcons[index]}</ListItemIcon>
                        <ListItemText classes={{ primary: classes.listItem }} primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

const headingCSS = css`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-left: 1rem;

    img {
        width: 33px;
        height: 33px;
    }

    h4 {
        font-family: Nunito;
        margin-left: 1rem;
    }
`
