import {
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core'
import React from 'react'
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
  },
}))

function Rooms() {
  const classes = useStyles()
  return (
    <div className={classes.main}  id="rooms">
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div className={classes.insideStyles}>
            <Container>
              <Grid container alignItem="center" justify="center" spacing={3}>
                <Grid item>
                <Typography style={{fontSize:'30px',fontWeight:700}}>ROOMS</Typography>
                </Grid>
                <Grid item>
                  <Typography style={{ fontSize: '16px',textAlign:'center',color:'#737373' }}>
                    I'm a paragraph. Click here to add your own text and edit
                    me. I’m a great place for you to tell a story and let your
                    users know a little more about you.
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="outlined" className={classes.bookBtn}>
                    Book a room
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Rooms
