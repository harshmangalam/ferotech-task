import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Grid, Typography } from '@material-ui/core'

import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: image1,
  },
  {
    label: 'Bird',
    imgPath: image2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath: image3,
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '60px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 480,
    display: 'block',
    width: '100%',
  },
}))

function Gallary() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <div className={classes.root}  id="gallery">
 <Grid container alignItems="center" justify="center" spacing={3} style={{marginTop:'20px'}}>
 <Typography style={{fontSize:'30px',fontWeight:700}}>GALLERY</Typography>
 </Grid>
      <Grid container alignItems="center" justify="center" spacing={3} style={{marginTop:'20px'}}>
        {[...new Array(3)].map((item) => (
          <Grid item md={4} key={item}>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Grid>
        ))}
      </Grid>
      <MobileStepper position="static" />
    </div>
  )
}

const carousels = [{ image: image1 }, { image: image2 }, { image: image3 }]
export default Gallary
