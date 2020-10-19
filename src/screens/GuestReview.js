import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
  MobileStepper,
  Paper,
} from '@material-ui/core'
import { FormatQuote } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { Parallax } from 'react-parallax'

const image1 =
  'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '60px',
  },

  bookBtn: {
    borderColor: 'black',
    borderRadius: 0,
    marginLeft: theme.spacing(6),
    marginTop:'16px',
    color: 'black',
    padding: theme.spacing(1, 3),
    transition: '0.6s',
    '&:hover': {
      backgroundColor: 'black',
      color: '#fff',
    },

  },

  parallax: {
    height: '600px',
  },

  insideStyles: {
    background: 'white',
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

function GuestReview() {
  const classes = useStyles()
  return (
    <div className={classes.main}  id="sedo">
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <Paper className={classes.insideStyles}>
          <Typography style={{fontSize:'30px',fontWeight:700}}>GUEST REVIEW</Typography>

            <Typography style={{ fontSize: '26px',marginTop:'16px' }}>
              <FormatQuote />
            </Typography>

            <Typography style={{ fontSize: '16px', textAlign: 'center',marginTop:'16px',fontFamily:'Great Vibes',fontSize:'20px' }}>
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </Typography>

            <Button variant="outlined" className={classes.bookBtn}>
              Book a room
            </Button>

            <MobileStepper
              variant="dots"
              steps={3}
              position="static"
              activeStep={0}
              style={{marginTop:'20px'}}
            />
          </Paper>
        </div>
      </Parallax>
    </div>
  )
}

export default GuestReview
