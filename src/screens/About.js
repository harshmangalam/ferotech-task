import {
  Grid,
  Paper,
  Typography,
  makeStyles,
  Button,
  Container,
} from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '60px',
  },
  title: {
    fontSize: '25px',
    color: '#242323',
    fontFamily: 'sans-serif',
  },
  text: {
    fontSize: '18px',
    color: '#737373',
    fontFamily: 'sans-serif',
    textAlign:'center',
   
  },
}))

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.main}  id="about">
      <Paper elevation={0}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={3}
        >
          <Grid item md={6}>
          <Typography style={{fontSize:'30px',fontWeight:700}}>ABOUT</Typography>
          </Grid>

          <Grid item md={6}>
            <Typography className={classes.text}>
              <i>I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.</i>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
