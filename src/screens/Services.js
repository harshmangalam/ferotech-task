import { Avatar, Grid, Typography } from '@material-ui/core'
import breakfast from "../assets/breakfast.png"
import houseKeeping from "../assets/houseKeeping.webp"
import wifi from "../assets/wifi.png"
import garden from "../assets/garden.png"
import pool from "../assets/pool.png"
import dining from "../assets/dining.png"
import React from 'react'

function Services() {
  return (
    <div style={{ marginTop: '60px' }}  id="services">
      <Grid container alignItems="center" justify="center">
        <Typography style={{fontSize:'30px',fontWeight:700}}>OUR SERVICES</Typography>
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
              <Avatar>
                <img src={item.image} width="100%" height="100%" />
              </Avatar>
              <Typography style={{ marginTop: '8px',fontWeight:600 }}>{item.heading}</Typography>
              <Typography style={{ marginTop: '16px',textAlign:'center',fontFamily:'Special Elite, cursive',color:'#757575' }}>
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
    heading: 'Breakfast',
    image:breakfast
    
  },
  {
    heading: 'Garden',
    image:garden
  },
  {
    heading: 'Pool',
    image:pool
  },
  {
    heading: 'Free Wifi',
    image:wifi
  },
  {
    heading: 'Daily HouseKeeping',
    image:houseKeeping
  },
  {
    heading: 'In-Room Dining Services',
    image:dining
  },
]
export default Services
