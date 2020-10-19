import { Avatar, Grid, Typography } from '@material-ui/core'
import breakfast from '../assets/breakfast.png'
import houseKeeping from '../assets/houseKeeping.webp'
import wifi from '../assets/wifi.png'
import garden from '../assets/garden.png'
import pool from '../assets/pool.png'
import dining from '../assets/dining.png'
import React from 'react'

function ThingsToDo() {
  return (
    <div style={{ marginTop: '60px' }}  id="thingstodo">
      <Grid container alignItems="center" justify="center">
      <Typography style={{fontSize:'30px',fontWeight:700}}>THINGS TO DO</Typography>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {items.map((item) => (
          <Grid item md={4}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ marginTop: '8px' }}>
                {item.heading}
              </Typography>
              <Typography style={{ marginTop: '16px', textAlign: 'center',fontFamily:'Orbitron, sans-serif',fontSize:'16px',color:'#737373' }}>
                I'm a paragraph. Click here to add your own text and edit me.
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const items = [
  {
    heading: 'Wineries Tour',
  },
  {
    heading: 'Cultural Sites',
  },
  {
    heading: 'Market Tour ',
  },
  {
    heading: 'Leisure Activities',
  },
  {
    heading: 'Birds Safari',
    
  },
  {
    heading: 'Horse Riding ',
  },
]
export default ThingsToDo
