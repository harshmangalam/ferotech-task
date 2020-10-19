import { Avatar, IconButton, makeStyles, Paper } from '@material-ui/core'
import { Facebook, Instagram } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    right: 50,
    top: '50%',
    padding:theme.spacing(2)
  },

  travAdv: {
    backgroundColor: '#fff',
    width: '30px',
    height: '30px',
  },
  icon: {
      color:'black'
  },
}))
function SocialIcons() {
  const classes = useStyles()
  return (
    <Paper className={classes.iconContainer} elevation={0}>
      <IconButton>
        <Avatar className={classes.travAdv}>
          <img
            src={require('../assets/trip_adv.png')}
            width="100%"
            height="100%"
          />
        </Avatar>
      </IconButton>
      <IconButton>
        <Facebook className={classes.icon} />
      </IconButton>
      <IconButton>
        <Instagram className={classes.icon} />
      </IconButton>
    </Paper>
  )
}

export default SocialIcons
