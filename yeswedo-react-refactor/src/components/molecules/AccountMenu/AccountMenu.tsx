import React, { useEffect, useState, useRef } from 'react'
import { SignOut } from '../../organisms'
import IconButton from '@material-ui/core/IconButton'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
// import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import MoreVert from '@material-ui/icons/MoreVert'

export const AccountMenu = () => {
    const [isOpen, setOpen] = useState(false)
    const anchorRef = useRef<HTMLButtonElement>(null)
    const prevOpen = useRef(isOpen)

    useEffect(() => {
      if (prevOpen.current === true && isOpen === false) {
        anchorRef.current!.focus()
      }

      prevOpen.current = isOpen
    }, [isOpen])

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return
        }
        setOpen(false)
    }

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    return (
        <div>
            <IconButton 
                ref={anchorRef}
                aria-controls={isOpen ? 'menu-list-grow' : undefined }
                aria-haspopup='true'
                onClick={handleToggle}
            >
                <MoreVert />
            </IconButton>
            <Popper open={isOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                      <MenuList 
                          autoFocusItem={isOpen} 
                          id="menu-list-grow" 
                          onKeyDown={handleListKeyDown}
                      >
                        <SignOut />
                      </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
            </Popper>
        </div>
    )
}
