import {
  AppBar,
  Button,
  Toolbar,
  makeStyles,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  ListItem,
  List,
  Paper,
  ListItemText, ListSubheader
} from '@material-ui/core'
import { ArrowBack, Close, Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import { NavHashLink } from 'react-router-hash-link'
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'rgb(36,35,35)',
    color: '#F5F5F5',
  },
  toolbar: {
    flexGrow: 1,
    margin: 'auto',
  },
  btnLink: {
    marginLeft: theme.spacing(6),
    transition: '0.6s',
    '&:hover': {
      color: '#A0A09F',
    },
  },
  btnOutline: {
    borderColor: '#fff',
    borderRadius: 0,
    marginLeft: theme.spacing(6),
    color: '#fff',
    padding: theme.spacing(1, 3),
    transition: '0.6s',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'rgb(36,35,35)',
    },
  },
}))
function Navbar() {
  const [drawer, setDrawer] = useState(false)
  const theme = useTheme()
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'))
  const classes = useStyles()

  const handleDrawer = () => {
    setDrawer(!drawer)
  }
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {mdScreen && (
            <>
              {navLinks.map((link) => (
                <Button
                  key={link.text}
                  component={NavHashLink}
                  smooth
                  to={`/${link.hash}`}
                  color="inherit"
                  variant="text"
                  className={classes.btnLink}
                  activeStyle={{ color: '#A0A09F' }}
                >
                  {link.text}
                </Button>
              ))}
            </>
          )}
          <Button className={classes.btnOutline} variant="outlined">
            Book A Room
          </Button>

          {!mdScreen && (
            <>
              {!drawer && (
                <IconButton
                  onClick={handleDrawer}
                  style={{ color: 'white', marginLeft: '16px' }}
                >
                  <Menu style={{ color: 'white' }} />
                </IconButton>
              )}
            </>
          )}
        </Toolbar>

        <Drawer
          open={drawer}
          onClose={() => setDrawer(false)}
          variant="persistent"
          anchor="top"
        >
          <Paper style={{ width: '100%', height: '80vh' }}>
            <IconButton

              onClick={handleDrawer}
              
              style={{ background: 'black', marginLeft: '16px',position:'absolute',right:20,top:10 }}
            >
              <Close  style={{ color: 'white' }} />
            </IconButton>
            <List style={{marginTop:'40px'}}>
              {navLinks.map((link) => (
                <ListItem
                  button
                  onClick={()=>setDrawer(false)}
                  key={link.text}
                  component={NavHashLink}
                  smooth
                  to={`/${link.hash}`}
                  activeStyle={{ color: '#A0A09F' }}
                >
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Drawer>
      </AppBar>
    </div>
  )
}

const navLinks = [
  { text: 'Home', hash: '#home' },
  { text: 'About', hash: '#about' },
  { text: 'Rooms', hash: '#rooms' },
  { text: 'Services', hash: '#services' },
  { text: 'SE & DO', hash: '#sedo' },
  { text: 'Contact', hash: '#contact' },
]
export default Navbar
