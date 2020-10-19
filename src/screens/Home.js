import {
  Paper,
  makeStyles,
  Typography,
  Grid,
  Container,
} from '@material-ui/core'
import bgImage from '../assets/homeBg.webp'
import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import Form from '../components/Form'
const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: '60px',
  },
  headingText: {
    fontWeight: 800,
    fontSize: '40px',
    color: '#242323',
    fontFamily: 'Vesper Libre, serif',
    marginTop:'30px'
  },
  subheadingText: {
    fontWeight: 400,
    fontFamily: 'Italianno, cursive',
    fontSize: '30px',
    marginBottom:'60px'
  },
  parallax: {
    marginTop: '30px',
  },
}))
function Home() {
  const classes = useStyles()
  return (
    <div className={classes.main}  id="home">
      <Grid
        container
        alignItems="center"
        justify="center"
        spacing={3}
        direction="column"
      >
        <Grid item>
          <Typography className={classes.headingText}>Ferofly</Typography>
          <Typography className={classes.subheadingText}>
            Magnify your Journey
          </Typography>
        </Grid>
      </Grid>
      <Parallax bgImage={bgImage} strength={500}>
        <div style={{ height: 500 }}></div>
      </Parallax>
      <Form />
    </div>
  )
}

export default Home
